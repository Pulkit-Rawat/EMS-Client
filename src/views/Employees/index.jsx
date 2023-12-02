import React, { useEffect, useState } from "react";
import AppLayout from "../../layout";
import { Button } from "reactstrap";
import DataTable from "./DataTable";
import { api } from "../../utilities/axios";

const Employees = () => {
  const [records, setRecords] = useState([]);
  const getAllEmployees = async () => {
    try {
      const { data } = await api.get("/getAllEmployee");
      console.log("data", data);
      if (data.success) {
        setRecords(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <AppLayout>
      <div className="w-100 p-2">
        <div className="text-center">
          <h4>Employees</h4>
        </div>
        <div className="text-end bg-dark p-1">
          <Button size="sm" color="primary">
            View
          </Button>
        </div>
        <DataTable />
      </div>
    </AppLayout>
  );
};

export default Employees;