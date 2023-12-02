import React from "react";
import { Table, Button } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";
import { api } from "../../utilities/axios";

const DataTable = ({ getDepartments = null, departments = [] }) => {
  const isManager = localStorage.getItem("role") == 1;

  const deleteDepartment = async (dptId = "") => {
    try {
      let payload = {
        dptId,
      };
      const { data } = await api.post("deleteDepartment", payload);
      if (data.success) {
        getDepartments();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-info">
      <Table striped>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Department Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.length
            ? departments.map((item, index) => (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.dptName}</td>
                  <td>{item.desc}</td>
                  <td>
                    <Button className="me-3" color="primary" size="sm">
                      View
                    </Button>
                    {isManager && (
                      <MdDeleteForever
                        size={24}
                        color="red"
                        onClick={() => deleteDepartment(item._id)}
                      />
                    )}
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
