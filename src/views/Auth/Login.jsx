import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Alert, Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup"

import { api } from "../../utilities/axios";

const Login =() =>{
  const history = useNavigate()
const [message, setMessage] = useState("")
  const validationSchema =Yup.object().shape({
    email:Yup.string().email("Invalid email").required("Email is required "),
    password:Yup.string().required("Password is required")
  })

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>
    {
      console.log("values",values)
      handleSubmit(values)
    }
  })
  const handleSubmit = async (values)=>{
    try{
      let {data} = await api.post("/login",values)
      console.log("res",data)
      if(data.success){
        localStorage.setItem("token",data.data.token)
        history("/dashboard")
      }
      // else{
      //  setMessage(data.message)
      // }
    }
    catch(err){
      console.log(err)
    }
  }
useEffect(()=>{
  setTimeout(()=>{
setMessage("")
  },8000)
})
  return (
    <>
      <Card className="bg-dark mx-auto mt-5" style={{ width: "500px" }}>
        <CardBody className="p-5">
         <div>

           <h3 className="text-white">Log In</h3>
         </div>
        {message && <Alert color="danger" >{message}</Alert>}
          <Form onSubmit={formik.handleSubmit} className="h-100" autoComplete="off">
            <FormGroup className="">
              <Label htmlFor="email" className="text-white ">
                Email
              </Label>
              <Input name="email" type="email" value={formik.values.email} autoComplete="off" onChange={formik.handleChange} />
              {formik.errors.email && <span style={{color:"red"}}>{formik.errors.email}</span>}
            </FormGroup>
          

            <FormGroup className="">
              <Label htmlFor="password" className="text-white ">
                Password
              </Label>
              <Input
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="off"
              />
            </FormGroup>
            <Button type="submit" color="primary" className="btn-primary mt-2">
              Log In
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
export default Login