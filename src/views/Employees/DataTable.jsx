import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";
import AssignDepartmentModal from "./AssignDepartmentModal";
import { api } from "../../utilities/axios";

const DataTable = ({ records = [] }) => {
  const [data, setData] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [departments, setDepartments] = useState([]);

  const toggle = () => setOpen(false);

  const handleViewDetails = (item) => {
    console.log("id", item);
  };

  const assignDepartment = (data) => {
    setOpen(true);
    setData(data);
  };

  const getDepartments = async () => {
    try {
      const { data } = await api.get("/getAllDepartments");
      if (data.success) {
        let formatData = [];
        formatData = data.data.map((item) => ({
          label: item.dptName,
          value: item._id,
        }));
        setDepartments(formatData);
      }
      console.log("getAllDepartments: ", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getDepartments(), []);

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
                  <td>{item.userName ? item.userName : "N/A"}</td>
                  <td>{item.mob}</td>
                  <td>{item.role == 1 ? "Employee" : "Manager"}</td>
                  <td>
                    <Button
                      className="me-3"
                      color="primary"
                      size="sm"
                      onClick={() => handleViewDetails(index + 1)}
                    >
                      View
                    </Button>
                    <Button
                      className="me-3"
                      color="success"
                      size="sm"
                      onClick={() => assignDepartment(item)}
                    >
                      Assign Department
                    </Button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </Table>
      <AssignDepartmentModal
        isOpen={isOpen}
        empData={data}
        toggle={toggle}
        departments={departments}
      />
    </div>
  );
};

export default DataTable;
