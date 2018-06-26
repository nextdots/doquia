/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  AsyncStorage
} from 'react-native';

import { Navigation } from 'react-native-navigation';


export default class Onboarding1 extends Component {





    constructor(props) {
      super(props);

    
      }


  componentWillMount(){



}


  componentDidMount(){


}

componentWillReceiveProps() {


}


  goToNextOnboarding() {

    // this would go inside the Component implementation of one of your screens, like FirstTabScreen.js
    this.props.navigator.push({
      screen: 'doquia.Onboarding2',
      title: ''
     });

  }

  static navigatorStyle = {
     navBarHidden: true, // make the nav bar hidden
   };




  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imgfondo} source={{
            uri: 'fondowhite',
            isStatic: true
          }}>
            <View style={styles.header}>
              <Image style={styles.imgLogo} source={{
                  uri: 'doquialogo',
                  isStatic: true
                }}></Image>
              <Text style={styles.text1}>Encontrá la mejor guardia
                </Text>
                <Text style={styles.text2}>Buscá por especialidad, cobertura y su estado de ocupación, accede a su ruta y a farmacias cercanas.
                </Text>
            </View>
            <View style={styles.medium}>
                <View style={styles.filareporte}>
                      <View style={styles.itemReporteIcono}>
                            <View style={styles.ovaloBlue}>
                              <Image style={styles.imgHosp} source={{
                                  uri: 'hospf',
                                  isStatic: true
                                }}></Image>
                            </View>
                      </View>
                      <View style={styles.itemReporteTexto}>
                        <Text style={styles.textItemreporte}>Fluído</Text>
                      </View>
                </View>
                <View style={styles.filareporte}>
                  <View style={styles.itemReporteIcono}>
                        <View style={styles.ovaloOrange}>
                          <Image style={styles.imgHosp} source={{
                              uri: 'hospf',
                              isStatic: true
                            }}></Image>
                        </View>
                  </View>
                  <View style={styles.itemReporteTexto}>
                    <Text style={styles.textItemreporte}>Trabado</Text>
                  </View>
                </View>
                <View style={styles.filareporte}>
                  <View style={styles.itemReporteIcono}>
                        <View style={styles.ovaloRed}>
                          <Image style={styles.imgHosp} source={{
                              uri: 'hospf',
                              isStatic: true
                            }}></Image>
                        </View>
                  </View>
                  <View style={styles.itemReporteTexto}>
                    <Text style={styles.textItemreporte}>Colapsado</Text>
                  </View>
                </View>
                <View style={styles.filareporte}>
                  <View style={styles.itemReporteIcono}>
                        <View style={styles.ovaloGreen}>
                          <Image style={styles.imgHosp} source={{
                              uri: 'hospf',
                              isStatic: true
                            }}></Image>
                        </View>
                  </View>
                  <View style={styles.itemReporteTexto}>
                    <Text style={styles.textItemreporte}>Sin reportes</Text>
                  </View>
                </View>
            </View>
            <View style={styles.footer}>

              <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.goToNextOnboarding()}>

                <Text style={styles.textNext}>
                  Continuar
                </Text>

              </TouchableOpacity>

            </View>
                  </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  next: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00bfa5',
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
  textNext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    width: '80%',
  },
  ovaloBlue:{
    width: 40,
    height: 40,
    backgroundColor: '#2064e8',
    borderRadius: 360,
    alignItems: 'center'
  },
  ovaloOrange:{
    width: 40,
    height: 40,
    backgroundColor: '#ff6b00',
    borderRadius: 360,
    alignItems: 'center'
  },
  ovaloRed:{
    width: 40,
    height: 40,
    backgroundColor: '#e51c23',
    borderRadius: 360,
    alignItems: 'center'
  },
  ovaloGreen:{
    width: 40,
    height: 40,
    backgroundColor: '#00bfa5',
    borderRadius: 360,
    alignItems: 'center'
  },
  filareporte:{
      flexDirection: 'row',
      //marginTop: 5,
       height: 50,
     width: '45%',
  },
  itemReporteIcono:{
     width: 60,
     alignItems: 'center',
     justifyContent: 'center'
},
  itemReporteTexto: {
     width: 130,
     alignItems: 'flex-start',
     justifyContent: 'center',
      marginLeft: 5,
  },
  textItemreporte: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 16,
  },
  text1: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
    marginTop: 20
  },
  text2: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 16,
    width: '85%',
    marginTop: 10
  },
  imgLogo: {
    width: 164,
    height: 36,
    marginTop: 90,
  },
  imgHosp: {
    width: 20,
    height: 20,
    marginTop: 10,

  },
  imgfondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  goNext: {
    width: 50,
    height: 50,
  },
  header: {
    height: 260,
    width: '100%',
    alignItems: 'center',

  },
  medium: {
    height: 300,
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
