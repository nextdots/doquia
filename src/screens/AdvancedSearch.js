/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Slider
} from 'react-native';

import { setCoberture,searchMedicalEstablishments,setRange,setPreviousScreen,getSpecialities,setSpeciality,setParticular,getCobertures } from '../actions/paramsActions'
import { connect } from 'react-redux';



class AdvancedSearch extends Component {


  constructor(props) {
    super(props);


    this.props.getSpecialities()
    this.props.getCobertures();

    this.state = { localRange: 5 };

    }

  componentDidMount(){

    this.props.setPreviousScreen('AdvancedSearch');

  }


componentWillUpdate(){

  const data = this.props.specialities;


  if (data.length>0){
    if (this.props.speciality==null){
      this.props.setSpeciality(data[0]);
    }
  }


  const dataCobertures = this.props.cobertures;


  if (dataCobertures.length>2){
    if (this.props.speciality==null){
      //this.props.setCoberture(dataCobertures[2]);
      this.props.setParticular(true);
    }
  }

  if (this.props.socialwork!=null || this.props.prepaid!=null) {
    this.props.setParticular(false);
  }



}

  Search() {


      this.props.setRange(this.state.localRange);

       this.props.navigator.push({
         screen: 'doquia.HomeMapResults',
         overrideBackPress: true,
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




  getCobertureName() {

      let coberture = '';

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


 getSpecialityName() {

     let speciality = '';

     if (this.props.speciality!=null)
     {
       speciality = this.props.speciality.name;
     }


     return speciality;

}



 goMenu() {



   this.props.navigator.push({
     screen: 'doquia.Menu',
     overrideBackPress: true,
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




 goCoberture() {



   this.props.navigator.push({
     screen: 'doquia.MedicalCoberture',
     overrideBackPress: true,
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



   this.props.navigator.push({
     screen: 'doquia.Specialities',
     overrideBackPress: true,
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

  render() {


    return (
      <View style={styles.container}>
        <View style={styles.sectionOptions}>

            <View style={styles.titulo}>
          <Text style={styles.txtTitulo}>
              Seleccione especialidad
          </Text>
              </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => this.goSpecialities()}>
      <View style={styles.buscar}>
                  <View style={styles.texto}>
                          <Text style={styles.txtBuscarGuardia}>
                            { this.getSpecialityName() }
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


            <View style={styles.titulo}>
          <Text style={styles.txtTitulo}>
              Seleccione cobertura
          </Text>
              </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => this.goCoberture()}>
      <View style={styles.buscar}>
                  <View style={styles.texto}>
                          <Text style={styles.txtBuscarGuardia}>
                              { this.getCobertureName() }
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






            <View style={styles.titulo}>
          <Text style={styles.txtTitulo}>
              Distancia Máxima
          </Text>
          <Text style={styles.txtTituloKM}>
            { this.state.localRange } KM
          </Text>
              </View>

              <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={200}
            value={this.state.localRange}
            onValueChange={val => {
            this.setState( { localRange: val} ) }}
           />


    </View>
        <View style={styles.sectionButton}>
          <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.Search()}>
            <Text style={styles.textNext}>
              Buscar
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
      particular: state.params.particular,
      prepaid: state.params.prepaid,
      socialwork: state.params.socialwork,
      plan: state.params.plan,
      previousScreen: state.params.previousScreen,
      specialities: state.specialities,
      coberture: state.params.coberture,
      cobertures: state.cobertures,
      range: state.params.range,

    };
}

AdvancedSearch = connect(mapStateToProps, { searchMedicalEstablishments,setRange,getCobertures,setParticular,setPreviousScreen,getSpecialities,setSpeciality,setCoberture })(AdvancedSearch);
export default AdvancedSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    width: '90%',
    marginTop:10
  },
  titulo:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10,
    marginTop: 45
  },
  txtTitulo:{
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '400',
    color: '#8a8a8a'
  },
  txtTituloKM:{
    textAlign: 'left',
    marginLeft: 50,
    fontSize: 17,
    fontWeight: '400',
    color: '#303030',
    justifyContent: 'flex-end'
  },
  texto: {
    width: '85%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  imagen: {
    flexDirection: 'row',
  width: '12%',


  },
  imgSearch:{
    width: 31,
    height: 31,
    resizeMode : 'stretch',
    alignItems: 'center',
},
  txtBuscarGuardia:{
    flex: 1,
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '400',
    color: '#2d2d2d'
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
  textNext: {
    color: '#00816f',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13
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
  sectionOptions: {
    flex: 1,
    alignItems: 'center',
  },
  sectionButton: {
    height: 130,
    alignItems: 'center',
  }
});
