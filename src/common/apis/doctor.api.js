import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"


export const getDoctorData = () => {
    return getRequest('doctor')
}

export const postDoctorData = (data) => {
    return postRequest('doctor', data)
}

export const deleteDoctorData = (id) => {
    return deleteRequest('doctor/', id)
}

export const updateDoctorData = (data) => {
    return updateRequest('doctor/', data)
}