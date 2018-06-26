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
import { setParticular, setCoberture, setCobertures,getCobertures } from '../actions/paramsActions'




class MedicalCoberture extends Component {


    constructor(props) {
      super(props);

      //if (this.props.cobertures.length===0) {
          this.props.getCobertures()
      //}




    }

    componentDidMount(){
        this.props.setParticular(true);

  }


  componentWillUnmount() {



   }


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

evaluateSelectedItem(){
    //segun el elemento seleccionado va a prepagas / Obras sociales o Ejecuta la busqueda de particular
  this.goToPrepagaSelection();

}

goToPrepagaSelection()
{

  const HOME='Home';
  const HOME_LIST_RESULTS= 'HomeMapResults';
  const ADVANCED_SEARCH = 'AdvancedSearch';

  const selectedItem = this.props.coberture;

  if (selectedItem!=null){


          let selectedValue = selectedItem.id
          const screenObraSocial = 'doquia.SocialWorks'
          const screenPrepaga = 'doquia.Prepaids'
          const screenHomeListResults = 'doquia.HomeMapResults'
          const screenAdvancedSearch = 'doquia.AdvancedSearch'
          let destinyScreen = null
          let title = null

          //alert(selectedValue);

          switch(selectedValue) {
           case 1:
               destinyScreen =  screenObraSocial
               title = 'Seleccione Obra Social'
               //alert(destinyScreen);
               break;
           case 2:
               destinyScreen = screenPrepaga
               //alert(destinyScreen);
               title = 'Seleccione Prepaga'
               break;
          case 3:
               if (this.props.previousScreen===ADVANCED_SEARCH) {
                 destinyScreen = screenAdvancedSearch
               }else {
                 destinyScreen = screenHomeListResults
               }
              //alert(destinyScreen);
               break;
           }


        this.props.navigator.push({
          screen: destinyScreen,
          title: title,
          backButtonTitle: '',
           navigatorStyle: {
              navBarBackgroundColor: '#00bfa5',
              navBarTextColor: '#ffffff',
              navBarNoBorder: true,
               navBarTextFontSize: 16,
               navBarButtonColor: '#ffffff',
               navBarSubtitleFontSize: 1,
           },
           navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)

         });

       }
       else {
           alert('Por favor, seleccione una cobertura')
       }


}



executeSearch()
{

  this.props.navigator.push({
    screen: 'doquia.Home'
   });

}

_keyExtractor = (item, index) => item.id.toString();


 onCheckedItem({ item, index }) {


    this.props.setParticular(false);
    let objects = this.props.cobertures;

    //primero setear todas las coberturas a false y guardar en el estado
    for (var i=0; i < objects.length; i++) {
      objects[i].checked = false
    }

    //checkear la cobertura elegida
    let data = this.props.cobertures;

    let targetItem = data[index];

    targetItem.checked = !targetItem.checked;

    this.props.setCobertures(data);

    //console.log(targetItem);

    this.props.setCoberture(targetItem);

    if (index===2) {
        this.props.setParticular(true);
    } else {
      this.props.setParticular(false);
    }

}

render() {
    return (
      <View style={styles.container}>

      <View style={styles.sectionList}>
      <FlatList
          data={ this.props.cobertures }
          renderItem={({item,index}) => this.renderItem(item,index) }
          style={styles.list}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          />


      </View>
        <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.evaluateSelectedItem()}>

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
      particular: state.params.particular,
      coberture: state.params.coberture,
      cobertures: state.cobertures,
      prepaid: state.params.prepaid,
      socialwork: state.params.prepaid,
      previousScreen: state.params.previousScreen,
    };
}

MedicalCoberture = connect(mapStateToProps, { setParticular, setCoberture, setCobertures,getCobertures })(MedicalCoberture);
export default MedicalCoberture;


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
