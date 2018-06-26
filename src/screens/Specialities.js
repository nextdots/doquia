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
import { setSpeciality,getSpecialities,setSpecialities,setCoberture,setCobertures,getCobertures } from '../actions'


class Specialities extends Component {

  constructor(props) {
    super(props);

    this.props.getSpecialities()

}

  componentDidMount(){

    }

    goThenSpecialities(destinyScreen) {
      this.props.navigator.push({
        screen: destinyScreen,
        title: 'Seleccione cobertura',
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


goToCobertura()
{

  const HOME='Home';
  const HOME_LIST_RESULTS= 'HomeListResults';
  const ADVANCED_SEARCH = 'AdvancedSearch';
  let destinyScreen ='';


  switch (this.props.previousScreen) {
    case HOME:
        destinyScreen='doquia.MedicalCoberture';
        const selectedItem = this.props.speciality

        if (selectedItem===null){
          alert('Por favor, seleccione una especialidad')
        } else {
            this.goThenSpecialities(destinyScreen);
        }

    break;
    case HOME_LIST_RESULTS:
        destinyScreen='doquia.HomeMapResults';
        this.goThenSpecialities(destinyScreen);
    break;
    case ADVANCED_SEARCH:
        destinyScreen='doquia.AdvancedSearch';
        this.goThenSpecialities(destinyScreen);
    break;
    default:
        destinyScreen='doquia.HomeMapResults';
        this.goThenSpecialities(destinyScreen);
  }


}

_keyExtractor = (item, index) => item.id;

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

    let objects = this.props.specialities;

    //primero setear todas las especialidades a false y guardar en el estado
    for (var i=0; i < objects.length; i++) {
      objects[i].checked = false
    }

    //checkear la especialidad elegida
    let data = this.props.specialities;
    let targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    this.props.setSpeciality(targetItem);
    this.props.setSpecialities(data);

}

render() {


    return (
        <View style={styles.container}>
      <View style={styles.sectionList}>
      <FlatList
          data={ this.props.specialities }
          renderItem={({item,index}) => this.renderItem(item,index) }
          style={styles.list}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          />
      </View>
        <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.goToCobertura()}>

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
      speciality: state.params.speciality,
      specialities: state.specialities,
      coberture: state.params.coberture,
      previousScreen: state.params.previousScreen,
    };
}

Specialities = connect(mapStateToProps, { setSpeciality, getSpecialities,setSpecialities,setCoberture, setCobertures,getCobertures })(Specialities);
export default Specialities;

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
  }
});
