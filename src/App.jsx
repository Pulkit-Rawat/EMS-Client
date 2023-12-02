import { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import logo from "./logo.svg";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import "./App.css";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Departments = lazy(() => import("./views/Departments"));
const Employees = lazy(() => import("./views/Employees"));

function App() {
  const [isAuth,setUserAuth] = useState(false)
    let token = localStorage.getItem("token")
 
  console.log("isAuth",token)
  return (
    <div className="App" style={{height:"100vh"}}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          {token ?
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
          : 
          <Navigate to="/" element={<Login/>}/>
          }

          
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
           
        
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
