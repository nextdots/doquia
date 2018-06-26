import { SET_ESTABLISHMENT } from './types';
import { URL_REPORT } from '../config';
import axios from 'axios';

export const setEstablishment = (establishment) =>  {
      return {
            type: SET_ESTABLISHMENT,
            payload: establishment
      };
}

export const sendReport = (establishment,latitude,longitude,status,comment) => {

  return axios.post(URL_REPORT, {
    "establishment": "5aaacfb561936504eaf6fc2b",
    "latitude": latitude,
    "longitude": longitude,
    "type": status,
    "comment": comment
  })


  //asi anda:  5aaacfb561936504eaf6fc2b

  }
