import { getRequest, postRequest } from "../request"


export const getDoctorData = () => {
    return getRequest('doctor')
}

export const postDoctorData = (data) => {
    return postRequest('doctor', data)
}