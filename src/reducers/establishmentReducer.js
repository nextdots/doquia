import { SET_ESTABLISHMENT } from '../actions/types';

const initialState = {
      establishment: null,
};



export default (state = initialState, action) => {

      switch (action.type) {
        case SET_ESTABLISHMENT:
            return {...state, establishment: action.payload }
            break;
        default:
            return state;
      }
}
