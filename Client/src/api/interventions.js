import axios from 'axios';

const URL = 'http://localhost:7000/service-heating/api/v1/interventions';

export const interventions = () => axios.get(`${URL}/`);
export const request = (newIntervention) => axios.post(`${URL}/request`, newIntervention);
export const order = (orderId) => axios.get(`${URL}/${orderId}`);
export const doneIntervention = (orderId) => axios.delete(`${URL}/${orderId}/delete`);
