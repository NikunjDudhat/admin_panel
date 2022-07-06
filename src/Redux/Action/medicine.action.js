import { BASE_URL } from '../../shared/baseURL';
import * as ActionTypes from '../ActionType'


export const medicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout (
            function () {
                fetch(BASE_URL + 'medicine')
                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
                .then(response => response.json())
                .then(medicines => dispatch({type : ActionTypes.GET_MEDICINE, payload : medicines}))
            }
        , 3000)
        // .catch(error => console.log((error.message)))
        .catch(error => dispatch(errorMedicines(error.message)))

    } catch(error) {
        // console.log(error);
        dispatch(errorMedicines(error))
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type : ActionTypes.LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type : ActionTypes.ERROR_MEDICINES, payload : error.message })
}