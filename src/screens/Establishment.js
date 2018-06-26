import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import PointStatus from '../components/PointStatus'

import { connect } from 'react-redux';
import { setEstablishment } from '../actions/establishmentActions'
import { sendReport } from '../actions/establishmentActions'

import axios from 'axios';

import { Navigation } from 'react-native-navigation';

class Establishment extends Component {



  constructor(props) {
    super(props);


     let report = this.props.establishment.state;

     switch (report) {
      case 'no-reports':
          status=4;
          break;
      case 'collapsed':
          status=3;
          break;
      case 'locked':
          status=2;
          break;
      case 'flowing':
          status=1;
          break;
      }


      //alert(status);



    this.state = {
                  fluido: false,
                  uri_fluido_off: require('../assets/fluido_off.png'),
                  uri_fluido_on: require('../assets/fluido_on.png'),
                  uri_fluido: require('../assets/fluido_off.png'),
                  atascado: false,
                  uri_atascado_off: require('../assets/atascado_off.png'),
                  uri_atascado_on: require('../assets/atascado_on.png'),
                  uri_atascado: require('../assets/atascado_off.png'),
                  colapsado: false,
                  uri_colapsado_off: require('../assets/colapsado_off.png'),
                  uri_colapsado_on: require('../assets/colapsado_on.png'),
                  uri_colapsado: require('../assets/colapsado_off.png'),
                  status_guardia: status,
                }


    }

  componentDidMount(){


   console.log(this.props.navigator);


}



offButtonsState(){

  this.setState({
    uri_fluido: this.state.uri_fluido_off,
    fluido:false,
    uri_atascado: this.state.uri_atascado_off,
    atascado:false,
    uri_colapsado: this.state.uri_colapsado_off,
    colapsado:false

  });


}

fluidoOnOff(){


this.sendReportEstablishment('flowing');

//pone todo en off
this.offButtonsState();

    if (this.state.fluido===false)
    {
      this.setState({
        uri_fluido: this.state.uri_fluido_on,
        fluido:true,
        //status_guardia:1
      });
    }
    else {
      this.setState({
        uri_fluido: this.state.uri_fluido_off,
        fluido:false
      });

    }

}

atascadoOnOff(){

this.sendReportEstablishment('locked');

//pone todo en off
this.offButtonsState();

    if (this.state.atascado===false)
    {
      this.setState({
        uri_atascado: this.state.uri_atascado_on,
        atascado:true,
        //status_guardia:2

      });
    }
    else {
      this.setState({
        uri_atascado: this.state.uri_atascado_off,
        atascado:false
      });

    }

}


showThanksScreen() {


  this.props.navigator.push({
    screen: 'doquia.Thanks',
    title: '¡Gracias!',
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

sendReportEstablishment(status) {

  const establishment = this.props.establishment.id;
  const comment = ".";
  const latitude = -32.9714815927031;
  const longitude = -60.64882295700835;

  var self = this;

  sendReport(establishment,latitude,longitude,status,comment)
  .then(function (response) {
          //const result = response.data.establishment

          //console.log(response);
          if (response.data.establishment) {

              console.log('reporte enviado con exito');

          setTimeout(function(){

            self.props.navigator.push({
              screen: 'doquia.Thanks',
              title: '¡Gracias!',
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

           }, 700);


          }



  })
  .catch(function (error) {
    console.log(error);
    if (error.response.data==='farAway') {
        alert('No es posible reportar el estado. Estás lejos del establecimiento');
    } else {
       alert('Error de Servidor');
    }
  });



}

colapsadoOnOff(){



this.sendReportEstablishment('collapsed');

//pone todo en off
this.offButtonsState();

    if (this.state.colapsado===false)
    {
      this.setState({
        uri_colapsado: this.state.uri_colapsado_on,
        colapsado:true,
        //status_guardia:3

      });
    }
    else {
      this.setState({
        uri_colapsado: this.state.uri_colapsado_off,
        colapsado:false
      });

    }

}

  render() {



    const data = this.props.establishment.photos;
    const photos = [];

    for (var i=0; i < data.length; i++) {

      photos.push(data[i].url);

    }

    const arrayAddress = this.props.establishment.address.split(',');
    const address = arrayAddress[0];

    const data2 = this.props.establishment.specialties;
    const specialities = [];

    for (var i=0; i < data2.length; i++) {
      specialities.push(data2[i].name);
    }



    return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.foto}>
              <Swiper style={styles.wrapper} showsButtons={false} dotColor={'white'} activeDotColor={'white'} dotStyle={styles.punto}>
                  {
                      photos.map( (item,index)=>{
                        return(
                          <View style={ styles['slider'+index] } key={index}>
                                <Image style={styles.imgGuardia} source={{
                                    uri: item
                                  }}></Image>
                            </View>

                        )})
                    }

                </Swiper>
            </View>
            <View style={styles.titulo}>
              <View style={styles.filatitulo1}>
                <PointStatus status_guardia={this.state.status_guardia}></PointStatus>
                <Text style={styles.textTitulo}>{ this.props.establishment.name }</Text></View>
              <View style={styles.filatitulo2}><Icon name="place" size={23}  color="#8a8a8a" style={styles.iconMarker} /><Text style={styles.textDireccion} > { address } </Text></View>
              <View style={styles.lineSeparator}></View>
            </View>
            <View style={styles.status}>
                      <Text style={styles.textComoEsta}>¿Cómo está la guardia?</Text>
                        <View style={styles.statusGuardia}>
                            <View style={styles.statusfluido}>
                                <TouchableOpacity activeOpacity={.5} onPress={() => this.fluidoOnOff()}>
                                      <Image style={styles.imgFluido} source={this.state.uri_fluido}  ></Image>
                                  </TouchableOpacity>
                              <Text style={styles.textStatus}>Fluído</Text>
                              </View>
                              <View style={styles.statusfluido}>
                                <TouchableOpacity activeOpacity={.5} onPress={() => this.atascadoOnOff()}>
                                      <Image style={styles.imgFluido} source={this.state.uri_atascado}  ></Image>
                                  </TouchableOpacity>
                                <Text style={styles.textStatus}>Atascado</Text>
                              </View>
                              <View style={styles.statusfluido}>
                                <TouchableOpacity activeOpacity={.5} onPress={() => this.colapsadoOnOff()}>
                                      <Image style={styles.imgFluido} source={this.state.uri_colapsado}  ></Image>
                                  </TouchableOpacity>
                                <Text style={styles.textStatus}>Colapsó</Text>
                                </View>
                        </View>
                <View style={styles.lineSeparator} ></View>
            </View>
            <View style={styles.specialities}>
                <Text style={styles.textEspecialidades}>Especialidades</Text>

                  {
                      specialities.map( (item,index)=>{
                        return(
                          <View style={styles.tableEspecialidades} key={index}>
                                      <View style={styles.pointItem}></View><Text style={styles.textItemEspecialidad}>{ item }</Text>
                          </View>

                        )})
                    }



                <View style={styles.lineSeparator}></View>
            </View>
            <View style={styles.description}>
                  <Text style={styles.textDescription}>{this.props.establishment.description}</Text>
                  <Text>      </Text>
                    <Text>      </Text>
                      <Text>      </Text>
                        <Text>      </Text>
                          <Text>      </Text>
                            <Text>      </Text>
            </View>
      </ScrollView>
    </View>
    );
  }
}

function mapStateToProps(state) {

  return {
      establishment: state.establishment.establishment,
    };
}

Establishment = connect(mapStateToProps, { setEstablishment })(Establishment);
export default Establishment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  punto:{
    opacity: 0.5,
  },
  slider1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 slider2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
},
slider3: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'white',
},
  description: {
      flex: 1
  },
  textDescription:{
    color: '#2d2d2d',
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 15,
    marginTop: 0,
    width: '90%',
    textAlign: 'left',
  },
  textItemEspecialidad: {
    color: '#2d2d2d',

    fontSize: 13,
    fontWeight: '300',
    marginLeft: 20,
  },
  textEspecialidades: {
    color: '#2d2d2d',
    marginLeft: 30,
    fontSize: 15,
    fontWeight: '700',
  },
  pointItem: {
    width: 8,
    height: 8,
    backgroundColor: '#bebebe',
    borderRadius: 360,
    marginLeft: 20

  },
  tableEspecialidades: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
      marginTop: 20,
  },
  specialities: {
      height: 180,
  },
  textComoEsta:{
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 30
  },
  textStatus: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10
  },
  imgFluido:{
      height: 60,
      width: 60
  },
  status: {
    height: 230,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusGuardia:{
    flexDirection: 'row',
    marginTop: 30,
  },
  statusfluido:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 120
  },
  lineSeparator: {
      borderWidth: .5,
      borderColor: '#dbdbdb',
      width: '90%',
      marginTop: 30,
      opacity: 0.5,
      marginLeft: '5%'
  },
  iconMarker: {
    marginLeft: 21,
  },
  foto: {
    height: 200,
  },
  imgGuardia: {
          height: 200,
          width: '100%'

  },
  textTitulo: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15
  },
  textDireccion: {
    color: '#8a8a8a',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 15
  },
  titulo:{
      height: 80,

  },
  filatitulo1:{
    marginTop: 10,
      height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filatitulo2:{
      height: 30,
    flexDirection: 'row',
        alignItems: 'center'
  }
});
