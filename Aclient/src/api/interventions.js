import axios from 'axios';

const URL = 'http://localhost:7000/service-heating/api/v1';

export const interventions = () => axios.get(`${URL}/active-interventions`);
export const request = (newIntervention) => axios.post(`${URL}/request`, newIntervention);
export const order = (orderId ,intervention) => axios.post(`${URL}/active-interventions/${orderId}`, intervention);
export const doneIntervention = (orderId) => axios.delete(`${URL}/${orderId}/delete`);
