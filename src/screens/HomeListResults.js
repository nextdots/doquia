import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  TouchableWithoutFeedback

} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { searchMedicalEstablishments } from '../actions/searchActions'

import ItemEstablishment from '../components/ItemEstablishment'
import ItemFarmacy from '../components/ItemFarmacy'

import { setSpecialities,setCoberture,setSpeciality,setParticular,setPrepaid,setSocialWork,setPlan,setPlans,setPreviousScreen } from '../actions/paramsActions'
import { setEstablishment } from '../actions/establishmentActions'

class HomeListResults extends Component {

  constructor(props) {
    super(props);

    /*const speciality = this.props.speciality!=null ? this.props.speciality.id : null;
    const particular = this.props.particular;
    const prepaid =  this.props.prepaid!=null ? this.props.prepaid.id : null;
    const plan = this.props.plan!=null ? this.props.plan.id : null;
    const socialwork = this.props.socialwork!=null ? this.props.socialwork.id : null;
    const longitude = '-60.6502123';
    const latitude = '-32.9725771';
    const range = this.props.range*1000;

    this.props.searchMedicalEstablishments(
                speciality,
                particular,
                range,
                latitude,
                longitude,
                prepaid,
                plan,
                socialwork
    )*/
    }

  componentDidMount(){

    this.props.setPreviousScreen('HomeListResults');



  }


  showMenu() {


  Navigation.showModal({
  screen: 'doquia.Menu', // unique ID registered with Navigation.registerScreen
  passProps: {}, // simple serializable object that will pass as props to the modal (optional)
  navigatorStle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  navigatorButons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});



  }


  goCoberture()
  {

    this.resetCoberture();

    this.props.navigator.push({
      screen: 'doquia.MedicalCoberture',
      title: 'Seleccione cobertura',
      backButtonTitle: '',
      leftButtonTitle: '',
       navigatorStyle: {
          navBarBackgroundColor: '#00bfa5',
          navBarTextColor: '#ffffff',
          navBarNoBorder: true,
           navBarTextFontSize: 16,
           navBarButtonColor: '#ffffff',
       },
       navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)

     });
  }

  goSpecialities() {

  this.resetSpecialities();

    this.props.navigator.push({
      screen: 'doquia.Specialities',
      title: 'Seleccione especialidad',
      backButtonTitle: '',
      leftButtonTitle: '',
       navigatorStyle: {
          navBarBackgroundColor: '#00bfa5',
          navBarTextColor: '#ffffff',
          navBarNoBorder: true,
           navBarTextFontSize: 16,
           navBarButtonColor: '#ffffff',
       },
       navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)

     });



}

  static navigatorStyle = {
     navBarHidden: true, // make the nav bar hidden
   };


   resetSpecialities()
   {
     const emptySpecialities = [];
     //this.props.setSpeciality(null);
     this.props.setSpecialities(emptySpecialities);
   }

   resetCoberture()
   {
     const emptyPlans = [];
     this.props.setPlans(emptyPlans);
     this.props.setCoberture(null);
     this.props.setParticular(false);
     this.props.setPrepaid(null);
     this.props.setSocialWork(null);
     this.props.setPlan(null);
   }

resetStateParams()
{

  const emptyPlans = [];
  this.props.setPlans(emptyPlans);
  this.props.setCoberture(null);
  this.props.setSpeciality(null);
  this.props.setParticular(false);
  this.props.setPrepaid(null);
  this.props.setSocialWork(null);
  this.props.setPlan(null);

}


ClearResults(){


        this.resetStateParams();

        this.props.navigator.push({
          screen: 'doquia.Home',
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

 showMapResults(){

   this.props.navigator.push({
     screen: 'doquia.HomeMapResults',
     title: '',
     animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
 }

 goToEstablishment(establishment){

      this.props.setEstablishment(establishment);

      this.props.navigator.push({
        screen: 'doquia.Establishment',
        title: 'Guardia',
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

 goToPharmacy(pharmacy){

   this.props.setEstablishment(pharmacy);

   this.props.navigator.push({
     screen: 'doquia.Pharmacy',
     title: 'Farmacia',
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

 _keyExtractor = (item, index) => item.id.toString();


 renderItem(item)
 {

    let isFarmacy = false;
    let specialitiesSize = 0;
    let specialty1 = '';
    let specialty2 = '';


    if (typeof(item.specialties) == 'undefined') {
      isFarmacy = true;
    } else {
      isFarmacy = false;
    }

    if (!isFarmacy) {
      specialitiesSize = item.specialties.length;
    }

    if (!isFarmacy && specialitiesSize>0) {
      specialty1 = item.specialties[0].name
    }

    if (!isFarmacy && specialitiesSize>1) {
        specialty2 = item.specialties[1].name
    }


    if (!isFarmacy) {
     return (
               <TouchableOpacity activeOpacity={0.9} onPress={() => this.goToEstablishment(item)}>
                      <ItemEstablishment
                        specialitiesSize={specialitiesSize}
                        specialty1={specialty1}
                        specialty2={specialty2}
                        url={item.photos[0].url}
                        name={item.name}
                        address={item.address}>
                      </ItemEstablishment>
               </TouchableOpacity>
       )
    } else {
      return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => this.goToPharmacy(item)}>
             <ItemFarmacy
               url={item.photos[0].url}
               name={item.name}
               address={item.address}>
             </ItemFarmacy>
      </TouchableOpacity>
       )
    }



 }


  getCobertureName() {

      let coberture = 'NOT SETTED';



      if (this.props.particular)
      {
        coberture = 'Particular';
      } else if (this.props.socialwork!=null) {
        coberture = this.props.socialwork.name;
      } else if (this.props.prepaid!=null) {
        coberture = this.props.prepaid.name;
      }



      return coberture;

 }

  render() {



    let specialityName = 'NOT SETTED';

    if (this.props.speciality!=null){
      specialityName = this.props.speciality.name;
    }


    return (
      <View style={styles.container}>
            <View style={styles.header}>


          <View style={styles.columna1}>
                  <View style={styles.isologo}>

                              <TouchableOpacity style={styles.modal} activeOpacity={0.7} onPress={() => this.showMenu()}>
                                    <View style={styles.circle}>
                                    <Image style={styles.imgIso2} source={{
                                        uri: 'logocolor',
                                        isStatic: true
                                      }}></Image>
                                      </View>
                                </TouchableOpacity>
                  </View>
             </View>
                <View style={styles.columna2}>
                  <View style={styles.clear}>

                              <TouchableOpacity style={styles.modal} activeOpacity={0.7} onPress={() => this.ClearResults()}>
                                    <View style={styles.circleClear}>
                                    <Image style={styles.imgCloseHome} source={{
                                        uri: 'closehome',
                                        isStatic: true
                                      }}></Image>
                                      </View>
                                </TouchableOpacity>
                  </View>
                  </View>
    </View>
      <View style={styles.searchButtons}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.goSpecialities()}>
              <View style={styles.buscar}>
                          <View style={styles.texto}>
                                  <Text style={styles.txtBuscarGuardia}>
                                      { specialityName  }
                                    </Text>
                            </View>
                              <View style={styles.imagen}>
                                    <Image style={styles.imgSearch} source={{
                                        uri: 'change',
                                        isStatic: true
                                      }}></Image>
                              </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.goCoberture()}>
            <View style={styles.buscar}>
                        <View style={styles.texto}>
                                <Text style={styles.txtBuscarGuardia}>
                                  { this.getCobertureName()  }
                                  </Text>
                          </View>
                            <View style={styles.imagen}>
                                  <Image style={styles.imgSearch} source={{
                                      uri: 'change',
                                      isStatic: true
                                    }}></Image>
                            </View>
                        </View>
                  </TouchableOpacity>
          </View>
            <View style={styles.listContainer}>
            //lista
            <FlatList
                data={ this.props.results }
                renderItem={({item}) => this.renderItem(item) }
                style={styles.list}
                keyExtractor={this._keyExtractor}
                extraData={this.state}
                />
            <TouchableOpacity style={styles.modalButton} activeOpacity={0.7} onPress={() => this.showMapResults()}>
                  <View style={styles.circleButton}>
                  <Image style={styles.imgButtonLista} source={{
                      uri: 'mapa',
                      isStatic: true
                    }}></Image>
                    </View>
              </TouchableOpacity>
      </View>
      </View>
    );
  }
}

function mapStateToProps(state) {

  return {
      speciality: state.params.speciality,
      particular: state.params.particular,
      prepaid: state.params.prepaid,
      socialwork: state.params.socialwork,
      plan: state.params.plan,
      results: state.results,
      establishment: state.establishment,
      previousScreen: state.params.previousScreen,
      range: state.params.range,
    };
}

HomeListResults = connect(mapStateToProps, { setSpecialities,setPreviousScreen,setEstablishment,searchMedicalEstablishments,setCoberture,setSpeciality,setParticular,setPrepaid,setSocialWork,setPlan,setPlans })(HomeListResults);
export default HomeListResults;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfa5'
  },
  imgLocation:{
      width: 17.7,
      height: 21.3,
      marginLeft: 10
  },
imgComoLlego:{
    width: 23,
    height: 23,
    marginLeft: 15

},
textItemDirection:{
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 10
  },
  textItemDirection2:{
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 5

  },
  itemButtonsColumna1: {
    flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
  flexDirection: 'row',
  //backgroundColor: 'black',

  },
  itemButtonsColumna2: {
    //  flex: 1,
      justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  //backgroundColor: 'blue',
  width: 180,
  },
  itemButtonsRow: {
    height: 48,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fafafa',
  //  backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemIcon:{
    borderRadius: 360,
    width: 30,
    height: 30,
    backgroundColor: '#ff6b00',
    position: 'absolute',
    bottom: 16,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTituloGuardia: {
    color: '#2d2d2d',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15
  },
  textSubTituloGuardia: {
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
      marginLeft: 15
  },
  imgHospSmall:{
    width: 19,
    height: 13,
  },
  imgHosp:{
    width: 113,
    height: 113,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 55,
    //overflow: 'hidden',
    borderColor: 'black',
    //borderWidth: 2
  },
  guardiaFila:{
    flexDirection: 'row',
    height: 150
  },
  guardiaColumna1:{
    width: 130,
  },
  guardiaColumna2:{
    flex: 1,
    justifyContent: 'center',
  },
  itemList:{
      height: 200,
      backgroundColor: '#ffffff',
      width: '94%',
      marginTop: 8,
      borderRadius: 3,
      marginLeft: '3%'
  },
  listContainer:{
    flex: 1,
  },
  list:{
    marginTop:0,

  },
  modalButton:{
    width: 80,
    height: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  circleButton: {
    width: 66,
    height: 66,
    backgroundColor: '#00bfa5',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
      shadowColor: '#bfbfbf',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderWidth: 0.5,
      borderColor: '#04e2c5',
  },
 texto: {
   width: 100,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
 },
   txtBuscarGuardia:{
     flex: 1,
     textAlign: 'left',
     marginLeft: 15,
     fontSize: 15,
     fontWeight: '400',
     color: '#2d2d2d'
   },
  modal:{
    width: 80,
    height: 100,
  },
  circleClear: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 13,
    shadowColor: '#00ab95',
     shadowOffset: { width: 1, height: 1 },
     shadowOpacity: 0.8,
      shadowRadius: 2,
      borderWidth: 1,
      borderColor: '#ececec',
  },
  circle: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 13,
    shadowColor: '#00ab95',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#ececec',
  },
  imgCloseHome:{
      width: 13,
      height: 13,
  },
  imgButtonLista:{
    width: 23,
    height: 30,
  },
  imgIso2:{
      width: 19,
      height: 22,
  },
  iconSearch: {
    marginLeft: 20,
  },
  imgSearch:{

  width: 31,
  height: 31,
  resizeMode : 'stretch',
  alignItems: 'center',
  marginLeft: 0

  },
txtBuscarGuardia:{
  flex: 1,
  textAlign: 'left',
  marginLeft: 5,
  fontSize: 14,
  fontWeight: '400',
  color: '#2d2d2d'
},
clear: {
  height: 90,
},
  isologo: {
    height: 90,
  },
  buscar: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   width: 160,
   backgroundColor: '#fff',
   borderWidth: 1,
   borderColor: '#ececec',
   borderRadius: 200 ,
   height: 45,
  shadowColor: '#00ab95',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
     shadowRadius: 2,
     marginTop: 20,
     marginLeft: 10
  },
  columna1:{
      flex: 1,
      justifyContent: 'flex-start',
          flexDirection: 'row',
  },
  columna2:{
      flex: 1,
      justifyContent: 'flex-end',
          flexDirection: 'row',
  },
  header: {
    width: '100%',
    height: 85,
    flexDirection: 'row',
  },
  searchButtons: {
    width: '100%',
    height: 70,
      justifyContent: 'flex-start',
      flexDirection: 'row',
},
footer:{
  flexDirection:'row',
  height: 100,
  justifyContent: 'flex-end'

}

});
