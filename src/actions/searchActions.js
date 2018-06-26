import { URL_SEARCH } from '../config';
import { EXECUTE_SEARCH } from './types';

import axios from 'axios';

export const executeSearch = (payload) =>  {
        return {
              type: EXECUTE_SEARCH,
              payload
        };
  }

export const searchMedicalEstablishments = (specialty,particular,range,latitude,longitude,prepaid,plan,socialwork) => {

var URL = URL_SEARCH;

let URL_FINAL_SEARCH = URL.replace('PARAM_SPECIALITY',specialty);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PARTICULAR',particular);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_RANGE',range);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_LATITUDE',latitude);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_LONGITUDE',longitude);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_SOCIALWORK',socialwork);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PREPAID',prepaid);
URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PLAN',plan);


    return (dispatch) => {


    return axios.get(URL_FINAL_SEARCH)
          .then(function (response) {
            console.log(response);

            const results = response.data;

            const payload = results.map(results=> {
                     return {
                       id: results._id,
                     name: results.name,
              description: results.description,
                  address: results.address,
                    phone: results.phone,
                 location: results.location,
               particular: results.particular,
                     city: results.city,
              socialWorks: results.socialWorks,
                 prepaids: results.prepaids,
                   photos: results.photos,
              specialties: results.specialties,
                    state: results.state,
                     }
                   })

               dispatch(executeSearch(payload));

          })
          .catch(function (error) {
            console.log(error);
          });




     }
}
