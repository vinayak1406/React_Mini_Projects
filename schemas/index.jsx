import * as  Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('Enter your name'),
    email: Yup.string().email().required('Enter Email Id'),
    password: Yup.string().min(6).required('Enter Password'),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'),null],'Password must match')
})