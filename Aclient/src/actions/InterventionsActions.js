import * as api from '../api/interventions';
import { INTERVENTIONS, ORDER } from '../constants/InterventionsConstants';

export const interventions = () => async (dispatch) => {
    try {
        const {data} = await api.interventions();

        dispatch({
            type: INTERVENTIONS,
            payload: data.interventions
        })
    } catch (error) {
        console.log(error);
    }
};
export const order = (orderId) => async (dispatch) => {
    try {
        const {data} = await api.order(orderId);

        dispatch({
            type: ORDER,
            payload: data.intervention
        })
    } catch (error) {
        console.log(error);
    }
};
