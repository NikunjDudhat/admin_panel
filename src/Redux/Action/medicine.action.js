import { BASE_URL } from '../../shared/baseURL';
import * as ActionTypes from '../ActionType'


export const medicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout (
            function () {
                fetch(BASE_URL + 'medicines')
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
                .catch(error => dispatch(errorMedicines(error.message)))
            }
        , 3000)

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const addMedicines = (data) => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout (
            function () {
                fetch(BASE_URL + 'medicines', {
                    method: 'POST', // or 'PUT'
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify(data),
                })
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
                .then(medicines => dispatch({type : ActionTypes.POST_MEDICINES, payload : medicines}))
                .catch(error => dispatch(errorMedicines(error.message)))
            }
        , 3000)

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout (
            function () {
                fetch(BASE_URL + 'medicines/' + id, {
                    method: 'DELETE', // or 'PUT'
                    headers: {'Content-Type': 'application/json',},
                })
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
                .then(medicines => dispatch({type : ActionTypes.DELETE_MEDICINES, payload : id}))
                .catch(error => dispatch(errorMedicines(error.message)))
            }
        , 3000)

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type : ActionTypes.LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type : ActionTypes.ERROR_MEDICINES, payload : error })
}