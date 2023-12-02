import React from "react";
import { Table, Button } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";

const DataTable = ({ departments = [] }) => {
  return (
    <div className="bg-info">
      <Table striped>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Employee Name</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.length
            ? departments.map((item, index) => (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.dptName}</td>
                  <td>{item.dptName}</td>
                  <td>
                    <Button className="me-3" color="primary" size="sm">
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
