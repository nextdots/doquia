/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView,{ Marker } from 'react-native-maps';
import { connect } from 'react-redux';

import { searchMedicalEstablishments } from '../actions/searchActions'

import ItemEstablishment from '../components/ItemEstablishment'
import ItemFarmacy from '../components/ItemFarmacy'

import { setSpecialities,setCoberture,setSpeciality,setParticular,setPrepaid,setSocialWork,setPlan,setPlans,setPreviousScreen } from '../actions/paramsActions'
import { setEstablishment } from '../actions/establishmentActions'



 class HomeMapResults extends Component {

   constructor(props) {
     super(props);

     const speciality = this.props.speciality!=null ? this.props.speciality.id : null;
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
     )
     }


     componentDidMount(){

       this.props.setPreviousScreen('HomeListResults');



     }


  showMenu() {


    Navigation.showModal({
  screen: 'doquia.Menu', // unique ID registered with Navigation.registerScreen
  //title: 'Modal', // title of the screen as appears in the nav bar (optional)
  passProps: {}, // simple serializable object that will pass as props to the modal (optional)
  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
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


 showListResults(){

   this.props.navigator.push({
     screen: 'doquia.HomeListResults',
     title: '',
     animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
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

  render() {



        let specialityName = 'NOT SETTED';

        if (this.props.speciality!=null){
          specialityName = this.props.speciality.name;
        }

        let firstLatitude = -32.9725771;
        let firstLongitude = -60.6502123;





    return (
      <View style={styles.container}>
            <View style={styles.header}>


          <View style={styles.columna1}>
                  <View style={styles.isologo}>

                              <TouchableOpacity style={styles.modal} activeOpacity={0.7} onPress={() => this.showMenu()}>
                                    <View style={styles.circle}>
                                    <Image style={styles.imgIso2} source={{
                                        uri: 'logowhite',
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
      <View style={styles.medium}>


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

            <TouchableOpacity style={styles.modalButton} activeOpacity={0.7} onPress={() => this.showListResults()}>
                  <View style={styles.circleButton}>
                  <Image style={styles.imgButtonLista} source={{
                      uri: 'list',
                      isStatic: true
                    }}></Image>
                    </View>
              </TouchableOpacity>

            <MapView
              showsUserLocation={true}
              style={styles.map}
              provider='google'
              initialRegion={{
                latitude: firstLatitude,
                longitude: firstLongitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
              }}
              >
              {
                  this.props.results.map( (item,index)=>{

                    //Pharmacy or Establishment
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
                    return(
                            <MapView.Marker
                              coordinate={ {latitude: item.location.coordinates[1], longitude: item.location.coordinates[0]  }   }
                              title={ item.name }
                                key={index}
                                onPress={() => this.goToEstablishment(item)}
                            >


                                    <View style={styles.markerBorder}>
                                        <View style={styles.marker}>
                                            <Image style={styles.hospmarker} source={{
                                                uri: 'hospmarker',
                                                isStatic: true
                                              }}></Image>
                                        </View>

                                    </View>

                           </MapView.Marker>
                 )
               }
                    else {
                      return(

                              <MapView.Marker
                                coordinate={ {latitude: item.location.coordinates[1], longitude: item.location.coordinates[0]  }   }
                                title={ item.name }
                                key={index}
                                onPress={() => this.goToPharmacy(item)}
                              >
                                      <View style={styles.markerBorderPharmacy}>
                                          <View style={styles.markerPharmacy}>
                                              <Image style={styles.farmmarker} source={{
                                                  uri: 'farm2',
                                                  isStatic: true
                                                }}></Image>
                                          </View>
                                      </View>
                             </MapView.Marker>

                   )
                    }
                  })
                }
          </MapView>



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

HomeMapResults = connect(mapStateToProps, { setSpecialities,setPreviousScreen,setEstablishment,searchMedicalEstablishments,setCoberture,setSpeciality,setParticular,setPrepaid,setSocialWork,setPlan,setPlans })(HomeMapResults);
export default HomeMapResults;


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  markerBorderPharmacy: {
    borderRadius: 360,
    backgroundColor: 'rgba(149,167,175,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },


  markerPharmacy:{
    borderRadius: 360,
    backgroundColor: '#95a7af',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',

  },
  markerBorder: {
    borderRadius: 360,
    backgroundColor: 'rgba(0,191,165,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },


  marker:{
    borderRadius: 360,
    backgroundColor: '#00bfa5',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',

  },
  hospmarker: {
    width: 26,
    height: 18,
  },
  farmmarker: {
    width: 18,
    height: 18,
  },
  map: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      zIndex: 0

  },
  modalButton:{
    width: 80,
    height: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,

  },
  circleButton: {
    width: 66,
    height: 66,
    backgroundColor: '#00bfa5',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    shadowColor: '#ececec',
     shadowOffset: { width: 1, height: 1 },
     shadowOpacity: 0.8,
      shadowRadius: 2,
      borderWidth: 1,
      borderColor: '#ececec',
  },
 texto: {
   width: 100,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
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
    shadowColor: '#ececec',
     shadowOffset: { width: 1, height: 1 },
     shadowOpacity: 0.8,
      shadowRadius: 2,
      borderWidth: 1,
      borderColor: '#ececec',

  },
  circle: {
    width: 45,
    height: 45,
    backgroundColor: '#00bfa5',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 13,
    shadowColor: '#ececec',
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
    width: 26,
    height: 31,
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
  marginLeft: -5

  },

txtBuscarGuardia:{
  flex: 1,
  textAlign: 'left',
  marginLeft: 15,
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
   shadowColor: '#ececec',
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
    zIndex:1,
  },
  medium: {
    width: '100%',
    height: 60,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      zIndex:1,
}

});
