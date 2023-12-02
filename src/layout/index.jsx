import React from "react";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import { Container, Row, Col } from "reactstrap";
const AppLayout = (props) => {
  return (
    // <div>
    //   <AppNavbar />
    //   {props.children}
    // </div>
    <Container className="m-0 p-0" fluid>
      <Row>
        <AppNavbar />
        <div className="d-flex">
          <AppSidebar />
          {props.children}
        </div>
      </Row>
    </Container>
  );
};

export default AppLayout;
