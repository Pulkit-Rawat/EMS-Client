import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Table } from "reactstrap";

const DataTable = ({ records = [] }) => {


  const navigate = useNavigate()
  const handleViewDetails = (item) =>{
    navigate(`/employees/view/${item._id}`)
  }
  return (
    <div className="bg-info-">
       <div className="text-center">
          <h4>Employees</h4>
        </div>
    <Table striped>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Email</th>
            <th>Employee Name</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length
            ? records.map((item, index) => (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.userName?item.userName:"N/A"}</td>
                  <td>{item.mob}</td>
                  <td>{item.role ==1 ?"Employee":"Manager"}</td>
                  <td>
                    <Button className="me-3" color="primary" size="sm" onClick={()=>handleViewDetails(item)}>
                      View
                    </Button>
                    <MdDeleteForever size={24} color="red" />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
