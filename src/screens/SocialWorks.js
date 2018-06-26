/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';


import { connect } from 'react-redux';
import { setPrepaid,setParticular,setSocialWork,getSocialWorks,setSocialWorks,setPlans,getPlans } from '../actions'


class SocialWorks extends Component {

  constructor(props) {
    super(props);
    this.props.getSocialWorks();
    }

  componentDidMount(){

}



  static navigatorStyle = {
     navBarSubtitleFontSize: 1, // make the nav bar hidden
   };





   _keyExtractor = (item, index) => item.id.toString();

   renderItem(item,index)
   {

     let imageCheck

     if (item.checked)
     {
       imageCheck  = <Image style={styles.imgCheck} source={{uri: 'check',isStatic: true}}></Image>;

     }else {
       imageCheck  = '';

     }

       return (
                 <TouchableWithoutFeedback>
                   <View style={styles.itemList}>
                         <View style={styles.filaItem}>
                         <View style={styles.columnTextItem}>
                           <Text style={styles.textItemList} onPress={() => this.onCheckedItem({ item, index })} >{item.name}</Text>
                         </View>
                             <View style={styles.columnCheckItem}>
                               {imageCheck}
                             </View>
                          </View>
                         <View style={styles.lineSeparator} />
                   </View>
                 </TouchableWithoutFeedback>
     )
   }

   onCheckedItem({ item, index }) {

       let objects = this.props.socialworks;

       //primero setear todas las prepagas a false y guardar en el estado
       for (var i=0; i < objects.length; i++) {
         objects[i].checked = false
       }

       //checkear la prepaga elegida
       let data = this.props.socialworks;
       let targetItem = data[index];
       targetItem.checked = !targetItem.checked;

       //mapeando planes
       this.props.getPlans(targetItem.plans);

       //this.props.setPlans(targetItem.plans);
       this.props.setSocialWorks(data);
       this.props.setSocialWork(targetItem);

   }




   goToPlan()
   {

     this.props.setPrepaid(null);
     this.props.setParticular(false);

     const HOME='Home';
     const HOME_LIST_RESULTS= 'HomeListResults';
     const ADVANCED_SEARCH = 'AdvancedSearch';

     let destinyScreen = null
     const ScreenHomeResults = 'doquia.HomeMapResults'
     const ScreenPlans = 'doquia.Plans'

       if (this.props.socialwork!=null){


          if (this.props.socialwork.plans.length>0) {
              //hay mas de 1 plan --> debe ir a la pantalla de selección de plan
              destinyScreen = ScreenPlans


          } else if (this.props.plans.length===1) {
                //hay solo 1 plan --> debe ir a resultados o advanced search

                 if (this.props.previousScreen===ADVANCED_SEARCH) {
                   destinyScreen = screenAdvancedSearch
                 }else {
                   destinyScreen = ScreenHomeResults
                 }

          } else {
              //No hay planes
               alert('No hay planes cargados - ERROR')
          }

        this.props.navigator.push({
         screen: destinyScreen,
         title: 'Seleccione Plan',
         backButtonTitle: '',
          navigatorStyle: {
             navBarBackgroundColor: '#00bfa5',
             navBarTextColor: '#ffffff',
             navBarNoBorder: true,
              navBarTextFontSize: 16,
              navBarButtonColor: '#ffffff',
              navBarSubtitleFontSize: 1,
          },
          navigatorButtons: {}
        });
     }
     else {
         alert('Por favor, seleccione una obra social')
     }


   }



render() {
    return (
      <View style={styles.container}>

      <View style={styles.sectionList}>
        <FlatList
            data={ this.props.socialworks }
            renderItem={({item,index}) => this.renderItem(item,index) }
            style={styles.list}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
            />


      </View>
        <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.goToPlan()}>

          <Text style={styles.textNext}>
            Seleccionar
          </Text>

        </TouchableOpacity>

          </View>
      </View>
    );
  }
}

function mapStateToProps(state) {

  return {
      socialwork: state.params.socialwork,
      plans: state.params.plans,
      socialworks: state.socialworks,
    };
}

SocialWorks = connect(mapStateToProps, { getPlans,setPrepaid,setParticular,setSocialWork, getSocialWorks,setSocialWorks,setPlans })(SocialWorks);
export default SocialWorks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  filaItem: {
    flexDirection: 'row'
  },
  columnTextItem: {
     flex: 1
  },
  columnCheckItem: {
      width: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'

  },
  imgCheck: {
      width: 27.3,
      height: 20
  },
  sectionList:{
    flex: 1,
    marginTop: 15
  },
  list:{

    marginTop: 15
  },
  sectionButton:{
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  next: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffeb3b',
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
  textNext: {
    color: '#00816f',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13
  },
  lineSeparator: {
      borderWidth: .5,
      borderColor: '#dbdbdb',
      width: '100%',
      //marginLeft: '5%',
      marginTop: 15,
      opacity: 0.5
  },
  itemList:{
    width: '100%',
    height: 65,


  },
  textItemList: {
    color: '#2d2d2d',
    marginLeft: 30,
    fontSize: 16,
    //marginTop: 5
  }
});
