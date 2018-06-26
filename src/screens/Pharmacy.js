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


class Pharmacy extends Component {

  constructor(props) {
    super(props);


    }

  componentDidMount(){


}


  render() {


        const data = this.props.establishment.photos;
        const photos = [];

        for (var i=0; i < data.length; i++) {

          photos.push(data[i].url);

        }

        const arrayAddress = this.props.establishment.address.split(',');
        const address = arrayAddress[0];




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
              <View style={styles.filatitulo1}><Text style={styles.textTitulo}>{this.props.establishment.name}</Text></View>
              <View style={styles.filatitulo2}><Icon name="place" size={23}  color="#8a8a8a" style={styles.iconMarker} /><Text style={styles.textDireccion}>{address}</Text></View>
              <View style={styles.filatitulo2}><Icon name="phone" size={21}  color="#8a8a8a" style={styles.iconMarker} /><Text style={styles.textPhone}>{this.props.establishment.phone}</Text></View>
              <View style={styles.lineSeparator}></View>
            </View>
            <View style={styles.description}>
                    <Text style={styles.textDetalles}>Detalles</Text>
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

Pharmacy = connect(mapStateToProps, { setEstablishment })(Pharmacy);
export default Pharmacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  punto:{
    opacity: 0.5,
  },
  slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 slide2: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
 },
 slide3: {
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
    marginLeft: 20,
    width: '90%',
    textAlign: 'left',
    marginTop: 15
  },
  textItemEspecialidad: {
    color: '#2d2d2d',

    fontSize: 13,
    fontWeight: '300',
    marginLeft: 20,
  },
  textDetalles: {
    color: '#2d2d2d',
    marginLeft: 20,
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

lineSeparator: {
      borderWidth: .5,
      borderColor: '#dbdbdb',
      width: '90%',
      marginTop: 25,
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
    marginLeft: 25
  },
  textDireccion: {
    color: '#8a8a8a',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 15,
  },
  textPhone: {
    color: '#8a8a8a',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 17
  },
  titulo:{
      height: 160,

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
        alignItems: 'center',
        marginTop: 5,
  }
});
