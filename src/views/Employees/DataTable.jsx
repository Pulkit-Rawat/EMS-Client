import React from "react";
import { Table, Button } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";

const DataTable = ({ records = [] }) => {
  const handleViewDetails = (item) =>{
console.log("id",item)
  }
  return (
    <div className="bg-info">
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
                    <Button className="me-3" color="primary" size="sm" onClick={()=>handleViewDetails(index + 1)}>
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
