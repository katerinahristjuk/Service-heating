import * as api from '../api/interventions';
import { DONE_INTERVENTION, INTERVENTIONS, ORDER, REQUEST } from '../constants/InterventionsConstants';

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
export const request = (newIntervention) => async (dispatch) => {
    try {
        const {data} = await api.request(newIntervention);

        dispatch({
            type: REQUEST,
            payload: data.newIntervention
        })
    } catch (error) {
        console.log(error);
    }
};
// export const createRecipe = (recipe) => async (dispatch) => {
//     try {
//         const { data } = await api.createRecipe(recipe);

//         dispatch({
//             type: CREATE_RECIPE,
//             payload: data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };
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

export const done = (orderId) => async (dispatch) => {
    try {
        const {data} = await api.doneIntervention(orderId);

        dispatch({
            type: DONE_INTERVENTION,
            payload: data.delInt
        })
    } catch (error) {
        console.log(error);
    }
};
