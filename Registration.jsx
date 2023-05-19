 import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from './schemas';
const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };

const Registration = () => {
  const {values,errors,handleBlur,handleChange,handleSubmit,touched}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
            console.log(values)
            action.resetForm()
        }
    })
    console.log(errors)
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
       <label htmlFor="name">Name</label><input type="name"  autoComplete='off' name="name" id="name"   value={values.name} 
       onChange={handleChange} onBlur={handleBlur}/> <br/> 
       {errors.name &&  touched.name?<p className='text-red-700'>{errors.name}</p>:null}
       <label htmlFor="email">Email</label><input type="email" autoComplete='off' name="email" id="email"value={values.email} 
       onChange={handleChange} onBlur={handleBlur} /> <br/>   {errors.email &&  touched.email?<p className='text-red-700'>{errors.email}</p>:null}
       <label htmlFor="password">Password</label> <input type="password"  autoComplete='off' name="password" id="passowrd"value={values.password} 
       onChange={handleChange} onBlur={handleBlur} /> <br/>  {errors.password &&  touched.password?<p className='text-red-700'>{errors.password}</p>:null}
       <label htmlFor="confirm-password">Confirm-password</label><input type="password" name="cpassword" id="cpassword" value={values.cpassword} 
       onChange={handleChange} onBlur={handleBlur}/> <br/>   {errors.cpassword &&  touched.cpassword?<p className='text-red-700'>{errors.cpassword}</p>:null}
    <button className='text-white bg-black p-1 text-center' type='submit'>Submit</button>
    </form>
    </> 
  )
}

export default Registration