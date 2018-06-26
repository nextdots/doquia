/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { setPlans,setPlan } from '../actions'

class Plans extends Component {

  constructor(props) {
    super(props);

    }

  componentDidMount(){

  }

renderItem(item,index)
{

  let imageCheck

  if (item.checked)
  {
    imageCheck  = <Image style={styles.imgCheck} source={{uri: 'check',isStatic: true}}></Image>;

  }else {
    imageCheck  = '';

  }

    return (
              <TouchableWithoutFeedback>
                <View style={styles.itemList}>
                      <View style={styles.filaItem}>
                      <View style={styles.columnTextItem}>
                        <Text style={styles.textItemList} onPress={() => this.onCheckedItem({ item, index })} >{item.name}</Text>
                      </View>
                          <View style={styles.columnCheckItem}>
                            {imageCheck}
                          </View>
                       </View>
                      <View style={styles.lineSeparator} />
                </View>
              </TouchableWithoutFeedback>
  )
}

onCheckedItem({ item, index }) {

    let objects = this.props.plans;

    //primero setear todas las prepagas a false y guardar en el estado
    for (var i=0; i < objects.length; i++) {
      objects[i].checked = false
    }

    //checkear el elegido
    let data = this.props.plans;
    let targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    this.props.setPlans(data);
    this.props.setPlan(targetItem);

}

executeSearch()
{

  const HOME='Home';
  const HOME_LIST_RESULTS= 'HomeMapResults';
  const ADVANCED_SEARCH = 'AdvancedSearch';

  const ScreenHomeResults = 'doquia.HomeMapResults'
  const screenAdvancedSearch = 'doquia.AdvancedSearch'

  let destinyScreen = null

  const plan = this.props.plan;

  if (plan===null)
  {
    alert('Por favor, seleccione un plan');
    return;
  }

  if (this.props.previousScreen===ADVANCED_SEARCH) {
    destinyScreen = screenAdvancedSearch
  }else {
    destinyScreen = ScreenHomeResults
  }

  this.props.navigator.push({
    screen: destinyScreen
   });

}

   _keyExtractor = (item, index) => item.id.toString();

render() {
    return (
      <View style={styles.container}>

      <View style={styles.sectionList}>
        <FlatList
            data={ this.props.plans }
            renderItem={({item,index}) => this.renderItem(item,index) }
            style={styles.list}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
            />


      </View>
        <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.executeSearch()}>

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
      plan: state.params.plan,
      plans: state.plans,
      previousScreen: state.params.previousScreen,
    };
}

Plans = connect(mapStateToProps, { setPlan,setPlans })(Plans);
export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  filaItem: {
    flexDirection: 'row'
  },
  columnTextItem: {
     flex: 1
  },
  columnCheckItem: {
      width: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'

  },
  imgCheck: {
      width: 27.3,
      height: 20
  },
  sectionList:{
    flex: 1,
    marginTop: 15
  },
  list:{

    marginTop: 15
  },
  sectionButton:{
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
  textNext: {
    color: '#00816f',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13
  },
  lineSeparator: {
      borderWidth: .5,
      borderColor: '#dbdbdb',
      width: '100%',
      //marginLeft: '5%',
      marginTop: 15,
      opacity: 0.5
  },
  itemList:{
    width: '100%',
    height: 65,


  },
  textItemList: {
    color: '#2d2d2d',
    marginLeft: 30,
    fontSize: 16,
    //marginTop: 5
  }
});
