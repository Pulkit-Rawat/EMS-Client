import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import SampleLogo from "../../assets/logo.png"

import "react-toastify/dist/ReactToastify.css";

const AppNavbar = () => {
  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem('token')
    navigate("/")

  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="d-flex align-items-center"><img src={SampleLogo} style={{height:"25px",width:"25px"}} alt="logo" className="rounded-circle"/>EMS</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={handleLogout}>Log out</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
