import { SET_SPECIALITY } from './types';
import { SET_PARTICULAR } from './types';
import { SET_PREPAID } from './types';
import { SET_PLAN } from './types';
import { SET_SOCIALWORK } from './types';
import { SET_COBERTURE } from './types';
import { SET_RANGE } from './types';

import { SET_PREVIOUS_SCREEN } from './types';


import { SET_SPECIALITY_NAME } from './types';
import { SET_SOCIALWORK_NAME } from './types';
import { SET_PLAN_NAME } from './types';


import { SET_SPECIALITIES } from './types';
import { SET_COBERTURES } from './types';
import { SET_PREPAIDS } from './types';

import { SET_SOCIALWORKS } from './types';
import { SET_PLANS } from './types';

import { URL_PREPAIDS } from '../config';
import { URL_SPECIALITIES } from '../config';
import { URL_SOCIAL_WORKS } from '../config';

import axios from 'axios';

export const setPreviousScreen = (previousScreen) =>  {
      return {
            type: SET_PREVIOUS_SCREEN,
            payload: previousScreen
      };
}


export const setRange = (range) =>  {
      return {
            type: SET_RANGE,
            payload: range
      };
}

export const setSpeciality = (speciality) =>  {
      return {
            type: SET_SPECIALITY,
            payload: speciality
      };
}

export const setParticular = (particular) =>  {
      return {
            type: SET_PARTICULAR,
            payload: particular
      };
}

export const setCoberture = (coberture) =>  {
      return {
            type: SET_COBERTURE,
            payload: coberture
      };
}

export const setPrepaid = (prepaid) =>  {
      return {
            type: SET_PREPAID,
            payload: prepaid
      };
}

export const setSocialWork = (socialwork) =>  {
      return {
            type: SET_SOCIALWORK,
            payload: socialwork
      };
}



export const setPlan = (payload) =>  {
      return {
            type: SET_PLAN,
            payload
      };
}

export const setSpecialities = (payload) =>  {
      return {
            type: SET_SPECIALITIES,
            payload
      };
}


export const getSpecialities = () => {


  return (dispatch) => {

    return axios.get(URL_SPECIALITIES)
          .then(function (response) {
            console.log(response);

            const specialities = response.data;

            const payload = specialities.map(specialities=> {
             return {
               id: specialities._id,
               name: specialities.name,
               checked: false
             }
           })

           dispatch(setSpecialities(payload));

          })
          .catch(function (error) {
            console.log(error);
          });

}
}

export const setCobertures = (payload) =>  {
      return {
            type: SET_COBERTURES,
            payload
      };
}

export const getCobertures = () => {
  return (dispatch) => {


    const payload = [{id: 1, name: 'Obra Social',checked: false},
                                  {id:2, name: 'Prepaga',checked: false},
                                  {id:3, name: 'Particular',checked: false}]

     dispatch(setCobertures(payload));

  }
}

  export const setPrepaids = (payload) =>  {
        return {
              type: SET_PREPAIDS,
              payload
        };
  }



  export const getPrepaids = () => {


    return (dispatch) => {

      return axios.get(URL_PREPAIDS)
            .then(function (response) {
              console.log(response);

              const prepaids = response.data;

              const payload = prepaids.map(prepaids=> {
               return {
                 id: prepaids._id,
                 name: prepaids.name,
                 plans: prepaids.plans,
                 checked: false
               }
             })

             dispatch(setPrepaids(payload));

            })
            .catch(function (error) {
              console.log(error);
            });

  }
  }






  export const setSocialWorks = (payload) =>  {
        return {
              type: SET_SOCIALWORKS,
              payload
        };
  }


  export const getSocialWorks = () => {


    return (dispatch) => {

      return axios.get(URL_SOCIAL_WORKS)
            .then(function (response) {
              console.log(response);

              const socialworks = response.data;

              const payload = socialworks.map(socialworks=> {
               return {
                 id: socialworks._id,
                 name: socialworks.name,
                 plans: socialworks.plans,
                 checked: false
               }
             })

             dispatch(setSocialWorks(payload));

            })
            .catch(function (error) {
              console.log(error);
            });

  }
  }



export const setPlans = (payload) =>  {
      return {
            type: SET_PLANS,
            payload: payload
      };
}


  export const getPlans = (plans) => {
    return (dispatch) => {


        const payload = plans.map(plans=> {
         return {
           id: plans._id,
           name: plans.name,
           checked: false
         }
       })


       dispatch(setPlans(payload));

    }
}
