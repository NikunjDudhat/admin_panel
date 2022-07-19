import { deleteDoctorData, getDoctorData, postDoctorData, updateDoctorData } from '../../common/apis/doctor.api'
import { BASE_URL } from '../../shared/baseURL'
import * as ActionTypes from '../ActionType'


export const getdoctor = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())

        getDoctorData()
        .then((data) => dispatch({type : ActionTypes.GET_DOCTOR, payload : data.data}))
        // setTimeout (
        //     function () {
        //         fetch(BASE_URL + 'doctor')
        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //         .then(response => response.json())
        //         .then(doctors => dispatch({type : ActionTypes.GET_DOCTOR, payload : doctors}))
        //         .catch(error => dispatch(errorMedicines(error.message)))
        //     }
        // , 3000)

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const postdoctor = (data) => (dispatch) => {
    try {
        dispatch(loadingMedicines())

        return postDoctorData(data)
        .then((data) => dispatch({type : ActionTypes.POST_DOCTOR, payload : data.data}))

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const deleteDoctor = (id) => (dispatch) => {
    try {
        dispatch(loadingMedicines())

        return deleteDoctorData(id)
        .then((data) => dispatch({type : ActionTypes.DELETE_DOCTOR, payload : id}))

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const updataDoctor = (data) => (dispatch) => {
    try {
        dispatch(loadingMedicines())

        return updateDoctorData(data)
        .then((data) => dispatch({type : ActionTypes.UPDATE_DOCTOR, payload : data.data}))

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