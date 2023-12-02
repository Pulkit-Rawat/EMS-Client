import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const AppSidebar = () => {
  return (
    <Nav vertical className="bg-light sidebar">
      <NavItem>
        <NavLink>
          <Link to={"/departments"}>Departments</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <Link to={"/employees"}>Employees</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">Contacts</NavLink>
      </NavItem>
    </Nav>
  );
};

export default AppSidebar;
