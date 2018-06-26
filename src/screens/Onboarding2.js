/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { Navigation } from 'react-native-navigation';


export default class Onboarding2 extends Component {

  goToGPS() {
    this.props.navigator.push({
      screen: 'doquia.Gps',
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
              <Text style={styles.text1}>Reportá a la comunidad

                </Text>
                <Text style={styles.text2}>El estado de la guardia médica en un momento determinado.

                </Text>
            </View>
            <View style={styles.medium}>

                <View style={styles.filareporte}>

                      <View style={styles.itemFluido}>
                        <Image style={styles.imgfluido} source={{
                            uri: 'fluido',
                            isStatic: true
                          }}></Image>
                        <Text style={styles.txtfluido}>fluído
                          </Text>

                      </View>
                      <View style={styles.itemAtascado}>

                        <Image style={styles.imgfluido} source={{
                            uri: 'atascado',
                            isStatic: true
                          }}></Image>
                        <Text style={styles.txtfluido}>trabado
                          </Text>

                      </View>
                      <View style={styles.itemColapso}>

                        <Image style={styles.imgfluido} source={{
                            uri: 'colapso',
                            isStatic: true
                          }}></Image>
                        <Text style={styles.txtfluido}>colapsó
                          </Text>

                      </View>
                </View>




            </View>
            <View style={styles.footer}>

              <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.goToGPS()}>

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
  itemFluido:{
      flexDirection: 'column',
      alignItems: 'center'
  },
  itemColapso:{
      flexDirection: 'column',
        alignItems: 'center'
  },
  itemAtascado:{
      flexDirection: 'column',
        alignItems: 'center'
  },
  imgfluido: {
    width: 56,
    height: 56,
  },
  txtfluido: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    width: 100,
    marginTop: 15

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
    width: '75%',
  },

  filareporte:{
      flexDirection: 'row',
      marginTop: 30,
       height: 50,
     width: '80%',
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
    height: 280,
    width: '100%',
    alignItems: 'center',

  },
  medium: {
    flex: 1,
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
