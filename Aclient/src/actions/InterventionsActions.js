import * as api from '../api/interventions';
import { INTERVENTIONS } from '../constants/InterventionsConstants';

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