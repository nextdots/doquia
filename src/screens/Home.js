/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setPreviousScreen } from '../actions/paramsActions'
import { connect } from 'react-redux';

import MapView from 'react-native-maps';

class Home extends Component {


  async saveKeyFirstLoad(value) {
    try {
        console.log('save data');
      await AsyncStorage.setItem('@firstLoad', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async clearStorage() {
      try {
        await AsyncStorage.clear();
      }
      catch (error) {
      }
}

  constructor(props) {
    super(props);
    this.props.setPreviousScreen('Home');
    }

  componentDidMount(){


       this.saveKeyFirstLoad('YES')
      //this.clearStorage();
  }

  showMenu() {


    Navigation.showModal({
  screen: 'doquia.Menu', // unique ID registered with Navigation.registerScreen
  overrideBackPress: true,
  //title: 'Modal', // title of the screen as appears in the nav bar (optional)
  passProps: {}, // simple serializable object that will pass as props to the modal (optional)
  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});



  }

  showSpecialities() {


    this.props.navigator.push({
      screen: 'doquia.Specialities',
      title: 'Seleccione especialidad',
      backButtonTitle: '',
      leftButtonTitle: '',
       navigatorStyle: {
         navBarButtonFontSize: 0,
         navBarLeftButtonColor: 'red',
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


  render() {
    return (
      <View style={styles.container}>


                <View style={styles.header}>

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
          <View style={styles.medium}>
                      <TouchableOpacity activeOpacity={0.7} onPress={() => this.showSpecialities()}>

                              <View style={styles.buscar}>

                              <Image style={styles.imgSearch} source={{
                                  uri: 'search',
                                  isStatic: true
                                }}></Image>
                                        <Text style={styles.txtBuscarGuardia}>
                                        Buscar Guardia
                                        </Text>

                              </View>
                        </TouchableOpacity>
                </View>
                <MapView
                  showsUserLocation = {true}
                  style={styles.map}
                  provider='google'
                  initialRegion={{
                    latitude: -32.9725771,
                    longitude: -60.6502123,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                  }}




                  >
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
      previousScreen: state.params.previousScreen,
    };
}

Home = connect(mapStateToProps, { setPreviousScreen })(Home);
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal:{
    width: 100,
    height: 100,
  },
  map: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      zIndex: 0

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
  imgIso2:{
      width: 19,
      height: 22,



  },
  iconSearch: {
    marginLeft: 20,
  },
  imgSearch:{
  marginLeft: 20,
    width: 15,
    height: 15,
    resizeMode : 'stretch',
    alignItems: 'center',

  },

txtBuscarGuardia:{
  flex: 1,
  textAlign: 'left',
  marginLeft: 15,
  fontSize: 17,
  fontWeight: '500',
  color: '#c2c2c2'
},
  isologo: {
    height: 90,
  },
  buscar: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   width: '95%',
   backgroundColor: '#fff',
   borderWidth: 1,
   borderColor: '#ececec',
   borderRadius: 200 ,
   height: 50,
   shadowColor: '#ececec',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
     shadowRadius: 2,
     marginTop: 10
  },
  header: {
    width: '100%',
    height: 85,
    zIndex: 1
  },
  medium: {
    width: '100%',
    height: 85,
      alignItems: 'center',
      zIndex: 1

  }

});
