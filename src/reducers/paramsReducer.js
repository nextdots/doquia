import { SET_SPECIALITY } from '../actions/types';
import { SET_PARTICULAR } from '../actions/types';
import { SET_PREPAID } from '../actions/types';
import { SET_SOCIALWORK } from '../actions/types';
import { SET_PLAN } from '../actions/types';
import { SET_COBERTURE } from '../actions/types';
import { SET_PREVIOUS_SCREEN } from '../actions/types';
import { SET_RANGE } from '../actions/types';

const initialState = {
      speciality: null,
      particular: false,
      prepaid: null,
      socialwork: null,
      plan: null,
      coberture: null,
      range: 5,
      previousScreen: '',
};


export default (state = initialState, action) => {

      switch (action.type) {
        case SET_SPECIALITY:
            return {...state, speciality: action.payload }
            break;
        case SET_COBERTURE:
            return {...state, coberture: action.payload }
            break;
        case SET_PARTICULAR:
            return {...state, particular: action.payload }
            break;
        case SET_PREPAID:
            return {...state, prepaid: action.payload }
            break;
        case SET_SOCIALWORK:
            return {...state, socialwork: action.payload }
            break;
        case SET_PLAN:
            return {...state, plan: action.payload }
            break;
        case SET_PREVIOUS_SCREEN:
            return {...state, previousScreen: action.payload }
            break;
        case SET_RANGE:
            return {...state, range: action.payload }
            break;
        default:
            return state;
      }
}
