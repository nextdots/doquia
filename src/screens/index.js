import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers';
import { composeWithDevTools } from 'remote-redux-devtools'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Gps from './Gps';
import Home from './Home';
import Specialities from './Specialities';
import MedicalCoberture from './MedicalCoberture';
import Prepaids from './Prepaids';
import SocialWorks from './SocialWorks';
import Plans from './Plans';
import Establishment from './Establishment';
import Pharmacy from './Pharmacy';
import Commentary from './Commentary';
import Thanks from './Thanks';
import Menu from './Menu';
import AdvancedSearch from './AdvancedSearch';
import HomeListResults from './HomeListResults';
import HomeMapResults from './HomeMapResults';

import {
  AsyncStorage
} from 'react-native';

async function getInitialScreen() {

    try {

  const initialScreen='';
  const screenHome = 'doquia.Home';
  const screenOnboarding1 = 'doquia.Onboarding1';



    console.log('get data');
    const value = await AsyncStorage.getItem('@firstLoad');
    console.log(value);

    if (value!=null)
    {
        initialScreen = screenHome;
    } else {
        initialScreen = screenOnboarding1;
    }

    return initialScreen

  } catch (error) {
    console.log("Error retrieving data" + error);
    initialScreen = screenHome;
    return initialScreen

  }
}


// register all screens of the app (including internal ones)
export function registerScreens() {



  Navigation.registerComponent('doquia.Onboarding1', () => Onboarding1);
  Navigation.registerComponent('doquia.Onboarding2', () => Onboarding2);
  Navigation.registerComponent('doquia.Gps', () => Gps);
  Navigation.registerComponent('doquia.Home', () => Home,store,Provider);
  Navigation.registerComponent('doquia.HomeListResults', () => HomeListResults,store,Provider);
  Navigation.registerComponent('doquia.HomeMapResults', () => HomeMapResults,store,Provider);
  Navigation.registerComponent('doquia.Specialities', () => Specialities,store,Provider);
  Navigation.registerComponent('doquia.MedicalCoberture', () => MedicalCoberture,store,Provider);
  Navigation.registerComponent('doquia.Prepaids', () => Prepaids,store,Provider);
  Navigation.registerComponent('doquia.SocialWorks', () => SocialWorks,store,Provider);
  Navigation.registerComponent('doquia.Plans', () => Plans,store,Provider);
  Navigation.registerComponent('doquia.Establishment', () => Establishment,store,Provider);
  Navigation.registerComponent('doquia.Pharmacy', () => Pharmacy,store,Provider);
  Navigation.registerComponent('doquia.Commentary', () => Commentary,store,Provider);
  Navigation.registerComponent('doquia.Thanks', () => Thanks,store,Provider);
  Navigation.registerComponent('doquia.Menu', () => Menu);
  Navigation.registerComponent('doquia.AdvancedSearch', () => AdvancedSearch,store,Provider);

  let initialScreen='';

  const value = getInitialScreen()

  return value

}
