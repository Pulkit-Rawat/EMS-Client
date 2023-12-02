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
      <Row className="m-0 p-0">
        <Col md={12}>
        <AppNavbar />
        </Col>
        <Col md={3} className="bg-light">
          <AppSidebar />
        </Col>
      <Col md={9}>
          {props.children}
      </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
