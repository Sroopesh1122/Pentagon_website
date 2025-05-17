import React, { useState } from 'react'
import { CiUser, CiLock } from "react-icons/ci";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Formik, Form, ErrorMessage } from "formik";
import { adminSignInValidation } from '../../utils/formikValidation';

const AdminSignIn = () => {
  const [showPassword, setPasswordShow] = useState(false);
  
    return (
      <section className="w-full max-w-[1800px] mx-auto min-h-screen flex flex-col  justify-center items-center md:gap-[20px] p-3 font-outfit">
        <section className="   rounded-2xl ">
          <h1 className="w-full text-2xl md:text-3xl lg:text-5xl  font-extrabold font-primary text-center uppercase">
            Pentagon Space
          </h1>
  
          <h1 className="w-full text-center mt-[15px] font-semibold">
            Super Admin Portal – Authorized Personnel Only
          </h1>
  
         
        </section>
  
        <section className="w-[300px] mt-[20px] md:mt-0 md:w-[300px] lg:w-[350px] ">
          <h1 className="w-full text-center text-2xl font-semibold">Admin Login</h1>
  
          <article className="mt-[30px] w-full">
            <Formik
             initialValues={{username:"",password:""}}
             validationSchema={adminSignInValidation}
             onSubmit={(val)=>{
              alert(JSON.stringify(val))
             }}
            >
              {({handleChange, handleBlur,values}) => {
                return (
                  <Form>
                    <div className="w-full p-3 rounded-xl border border-slate-300 flex justify-start items-center">
                      <CiUser size={20} />
  
                      <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="flex-1 ms-2 placeholder:text-gray-500"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <ErrorMessage name="username" component="p" className="text-[0.75rem] text-red-500"/>
  
                    <div className=" mt-[10px] w-full p-3 rounded-xl border  border-slate-300 flex justify-start items-center">
                      <CiLock size={20} />
  
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="flex-1 ms-2 placeholder:text-gray-500"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
  
                      {!showPassword ? (
                        <BsEye
                          size={18}
                          className="cursor-pointer"
                          onClick={() => setPasswordShow(true)}
                        />
                      ) : (
                        <BsEyeSlash
                          size={18}
                          className="cursor-pointer"
                          onClick={() => setPasswordShow(false)}
                        />
                      )}
                    </div>
                    <ErrorMessage name="password" component="p" className="text-[0.75rem] text-red-500"/>
                    <div className="flex justify-end items-center">
                      <span className="cursor-pointer text-[0.8rem] hover:underline">
                        Forgot Password?
                      </span>
                    </div>
                     
                    <div className="flex w-full mt-[30px] text-white justify-center items-center">
                       <button className=" w-[80%] p-3 bg-orange-500 hover:bg-orange-600 duration-300 rounded-2xl cursor-pointer">Login</button>
  
                    </div>
  
                  </Form>
                );
              }}
            </Formik>
             
            
          </article>
        </section>
      </section>
    );
}

export default AdminSignIn
