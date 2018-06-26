/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from 'react-native-navigation';

export default class Menu extends Component {


  static navigatorStyle = {
     navBarHidden: true, // make the nav bar hidden
   };

   goToHome() {

     Navigation.dismissModal({
   animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
 });
   }

   goToAdvancedSearch() {

     this.props.navigator.push({
       screen: 'doquia.AdvancedSearch',
       overrideBackPress: true,
       title: 'Búsqueda avanzada',
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

   goToOptionMenu() {
     this.props.navigator.push({
       screen: 'doquia.GuardiaDetail',
       title: ''
      });

   }



  render() {
    return (
      <View style={styles.container}>
            <View style={styles.sectionBack}>
              <TouchableWithoutFeedback onPress={() => this.goToHome()}>
              <Image style={styles.imgBack} source={{
                  uri: 'back',
                  isStatic: true
                }}></Image>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.sectionBusquedaAvanzada}>
              <Image style={styles.imgLogo} source={{
                  uri: 'doquialogo-1',
                  isStatic: true
                }}></Image>
              <TouchableOpacity style={styles.next} activeOpacity={.7} onPress={() => this.goToAdvancedSearch()}>
                          <View style={styles.round}><Image style={styles.imgSearch} source={{uri: 'advancedsearch',isStatic: true}}></Image></View>
                           <Text style={styles.TextStyleNext}>Búsqueda Avanzada</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionMenu}>
                <TouchableOpacity activeOpacity={.7} onPress={() => this.goToOptionMenu()}>
                    <View style={styles.filaMenu}>
                      <View style={styles.columnaMenuIcon}>
                            <Image style={styles.imgShare} source={{
                              uri: 'share',
                              isStatic: true
                            }}></Image>
                        </View>
                          <View style={styles.columnaMenuText}>
                              <Text style={styles.TextMenu}>Comparte Doquia</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={() => this.goToOptionMenu()}>
                  <View style={styles.filaMenu}>
                      <View style={styles.columnaMenuIcon}>
                          <Image style={styles.imgAcerca} source={{
                              uri: 'acerca',
                              isStatic: true
                            }}></Image>
                        </View>
                          <View style={styles.columnaMenuText}>
                              <Text style={styles.TextMenu}>Acerca de</Text>
                            </View>
                  </View>
              </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={() => this.goToOptionMenu()}>
                  <View style={styles.filaMenu}>
                      <View style={styles.columnaMenuIcon}>
                          <Image style={styles.imgPoliticas} source={{
                              uri: 't_rminos',
                              isStatic: true
                            }}></Image>
                        </View>
                          <View style={styles.columnaMenuText}>
                              <Text style={styles.TextMenu}>Políticas de privacidad</Text>
                        </View>
                  </View>
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
  filaMenu:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
  },
  columnaMenuIcon:{
    justifyContent: 'center',
    width: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  columnaMenuText:{
    justifyContent: 'flex-start',
    width: 220,
    flexDirection: 'row',
      alignItems: 'center'
  },
  imgShare: {
    width: 20,
    height: 26,
    marginTop: 5,

  },
  imgAcerca: {
    width: 9,
    height: 20,
    marginTop: 5,

  },
  imgPoliticas: {
    width: 20,
    height: 20,
    marginTop: 5,

  },
  TextMenu:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 25,
      marginTop: 8
  },
  imgSearch: {
    width: 27,
    height: 27,
  },
  round: {
    width: 65,
    height: 43,
    backgroundColor: '#ffff00',
    borderRadius: 30,
    marginTop: 4,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  next: {
   marginLeft: 5,
   marginRight: 5,
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 30,
   width: 270,
   height: 53,
   marginTop: 40,
   flexDirection: 'row'
 },
 TextStyleNext: {
   color: '#fff',
   textAlign: 'center',
   fontSize: 16,
   fontWeight: '700',
   marginLeft: 20,
     marginTop: 15
 },
  imgLogo:{
    height: 46,
    width: 212,
    marginTop: 50
  },
  imgBack:{
    height: 23,
    width: 13,
    marginLeft: 15
  },
  sectionBack:{
        height: 80,
        justifyContent: 'flex-end',
  },
  sectionBusquedaAvanzada:{
    height: 215,
    alignItems: 'center'
  },
  sectionMenu: {
    flex: 1,
  }
});
