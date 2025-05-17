import * as YUP from "yup"


const idRegex = /^PS\d{2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\d{2}OF(JFS|PFS)\d{3}$/;


export const studentSignInValidation = YUP.object().shape({
    id: YUP.string().required("Required!").matches(idRegex, "Invalid Id"),
    password:YUP.string().required("Required!")
})


export const adminSignInValidation = YUP.object().shape({
    username: YUP.string().required("Required!"),
    password:YUP.string().required("Required!")
})