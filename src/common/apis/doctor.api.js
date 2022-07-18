import { deleteRequest, getRequest, postRequest } from "../request"


export const getDoctorData = () => {
    return getRequest('doctor')
}

export const postDoctorData = (data) => {
    return postRequest('doctor', data)
}


export const deleteDoctorData = (id) => {
    return deleteRequest('doctor/', id)
}