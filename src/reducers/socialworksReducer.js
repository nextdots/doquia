import { SET_SOCIALWORKS } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {

      switch (action.type) {
        case SET_SOCIALWORKS:
            return [ ...action.payload ]
            break;
        default:
              return state;
      }
}
