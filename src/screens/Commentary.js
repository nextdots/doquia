/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Commentary extends Component {


  goToGuardiaDetails() {


    this.props.navigator.push({
      screen: 'doquia.GuardiaDetail',
      title: '',
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


  render() {
    return (
      <View style={styles.container}>
              <View style={styles.sectionComentary}>
                          <Text style={styles.textTitulo}>¿Querés comentarnos algo más?</Text>
                          <TextInput
                            style={styles.textInputCommentary}
                            multiline = {true}
                            numberOfLines = {10}
                            placeholder={'Ingrese sus comenarios, cuentenos otro detalles sobre la atecion recibida, el tiempo de espera o  lo que desee..'}
                          ></TextInput>
              </View>
              <View style={styles.sectionButtons}>
              <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.gotoThanks()}>
                <Text style={styles.textNext}>
                  Enviar Comentario
                </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} onPress={() => this.goToGuardiaDetails()}>
                <Text style={styles.textOmitir}>
                  Omitr comentario
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
  },
  sectionComentary:{
    flex: 1,
    alignItems: 'center',
  },
  sectionButtons:{
    height: 300,
    alignItems: 'center',
  },
  textInputCommentary:{
        height:180,
        width: '85%',
        borderColor: '#cdcdcd',
        borderWidth: 0.3,
        marginTop: 30,
        fontSize: 16,
        padding:15,

  },
  textTitulo:{
    color: '#2d2d2d',
    fontSize: 19,
    fontWeight: '500',
    marginTop: 45
  },
  next: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#00bfa5',
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
    marginTop: 30
  },
  textNext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13
  },
  textOmitir: {
    color: '#aeaeae',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 30,


  }
});
