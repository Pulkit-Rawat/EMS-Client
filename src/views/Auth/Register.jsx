import axios from "axios";
import { useFormik } from "formik";
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup";

import { api } from "../../utilities/axios";

const Register = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password required")
      .min(5, "Min 5 characters"),
    role: Yup.number().required("Please choose role"),
    mob: Yup.string().required("Mobile no. is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      role: "",
      mob: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      handleSubmit(values);
    },
  });
  // const handleSubmit = async (values)=>{
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   try{
  //     let res = await axios.post("http://localhost:4000/register",values,{headers:headers})
  //     if(res){
  //       console.log("inserted")
  //     }
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  const handleSubmit = async (values) => {
    try {
      const { data } = await api.post("/register", values);
      
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeRole = (role) => {
    if (role == 1) formik.setFieldValue("role", 1);
    else formik.setFieldValue("role", 2);
  };
  return (
    <>
      <Card className="bg-dark mx-auto mt-5" style={{ width: "500px" }}>
        <CardBody className="p-5">
          <CardHeader>
            <h3 className="text-white">Sign Up</h3>
          </CardHeader>
          <Form onSubmit={formik.handleSubmit} className="h-100">
            <FormGroup className="" style={{ textAlign: "left" }}>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              )}
            </FormGroup>
            <FormGroup className="" style={{ textAlign: "left" }}>
              <Label htmlFor="userName" className="text-white ">
                User Name
              </Label>
              <Input
                name="userName"
                type="text"
                placeholder="User Name"
                onChange={formik.handleChange}
              />
              {formik.errors.userName && (
                <span style={{ color: "red" }}>{formik.errors.userName}</span>
              )}
            </FormGroup>
            <FormGroup className="" style={{ textAlign: "left" }}>
              <Label htmlFor="mob" className="text-white ">
                Contact
              </Label>
              <Input
                name="mob"
                type="number"
                placeholder="Contact"
                onChange={formik.handleChange}
              />
              {formik.errors.mob && (
                <span style={{ color: "red" }}>{formik.errors.mob}</span>
              )}
            </FormGroup>
            <FormGroup
              className="d-flex justify-content-between"
              style={{ textAlign: "left" }}
            >
                <div>
                <Label htmlFor="mob" className="text-white me-2">
                  Manager
                </Label>
                <Input
                  name="role"
                  type="radio"
                  value="1"
                  onChange={() => handleChangeRole(2)}
                />
              </div>
              <div>
                <Label htmlFor="mob" className="text-white me-2">
                  Employee
                </Label>
                <Input
                  name="role"
                  type="radio"
                  value="2"
                  onChange={() => handleChangeRole(1)}
                />
              </div>
            
            </FormGroup>
            {formik.errors.role && (
              <span style={{ color: "red" }}>{formik.errors.role}</span>
            )}
            <FormGroup className="" style={{ textAlign: "left" }}>
              <Label htmlFor="password" className="text-white ">
                Password
              </Label>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
              />
              {formik.errors.password && (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
              )}
            </FormGroup>
            <Button type="submit" className="btn-primary">
              Sign In
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default Register;
