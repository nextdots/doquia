/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class Thanks extends Component {

  componentDidMount() {


  }


  static navigatorStyle = {
     navBarHidden: true, // make the nav bar hidden
   };

   goToEstablishment(){

     this.props.navigator.resetTo({
       screen: 'doquia.HomeMapResults',
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


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionThanks}>
          <Image style={styles.imgLogo} source={{
              uri: 'isowhite2',
              isStatic: true
            }}></Image>
          <Text style={styles.textThanks}>¡Gracias!</Text>
          <Text style={styles.textThanks2}>Estás ayudando a otros pacientes a atenderse MEJOR.</Text>
          <Text style={styles.textThanks3}>- Doquia Team</Text>
        </View>
        <View style={styles.sectionButton}>
          <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.goToEstablishment()}>
            <Text style={styles.textNext}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfa5'
  },
  imgLogo:{
    width: 62,
    height: 68,
    marginTop: 150,
  },
  textThanks:{
    color: 'white',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '700',
    width: '75%',
    marginTop: 20,
  },
  textThanks2:{
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    width: '80%',
    marginTop: 30,
  },
  textThanks3:{
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    width: '80%',
    marginTop: 30,
    marginLeft: 120,
  },
  sectionButton: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionThanks: {
      flex: 1,
      alignItems: 'center',
  },
  next: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ffeb3b',
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
  textNext: {
    color: '#00816f',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    width: '75%',
  },
});
