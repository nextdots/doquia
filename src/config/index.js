const SERVER_DEV =  'http://159.89.33.251';
let SERVER = SERVER_DEV;

export const URL_SPECIALITIES = SERVER+'/api/v1/specialties';
export const URL_PREPAIDS = SERVER+'/api/v1/prepaids';
export const URL_SOCIAL_WORKS = SERVER+'/api/v1/social-works';

export const URL_SEARCH = SERVER+'/api/v1/search?specialty=PARAM_SPECIALITY&'+
                                 'longitude=PARAM_LONGITUDE&'+
                                 'latitude=PARAM_LATITUDE&'+
                                 'rango=PARAM_RANGE&'+
                                 'particular=PARAM_PARTICULAR&'+
                                 'socialWork=PARAM_SOCIALWORK&'+
                                 'plan=PARAM_PLAN&'+
                                 'prepaid=PARAM_PREPAID';


export const URL_REPORT = SERVER+'/api/v1/establishment-reports';
