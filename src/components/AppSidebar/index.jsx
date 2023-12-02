import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./sidebar.scss"
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const handleRedirect = () =>{

  }
  return (

    <Nav vertical className="sidebar  pt-3 ">
      <NavItem className="pointer" onClick={handleRedirect}>
        <Link to="/departments" className="text-dark nav-link">
         Departments
        </Link>
      </NavItem>
      <NavItem  className="pointer" >
        <Link to="/employees" className="text-dark nav-link">
          Employees
        </Link>
      </NavItem>
  
    </Nav>
  );
};

export default AppSidebar;
