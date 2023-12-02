import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import AppLayout from "../../layout";
import { api } from "../../utilities/axios";
import DataTable from "./DataTable";

const Employees = () => {
  const [records, setRecords] = useState([]);
  const getAllEmployees = async () => {
    try {
      const { data } = await api.get("/getAllEmployee");
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
       
        {/* <div className="text-end bg-dark p-1">
          <Button size="sm" color="primary" onClick={()=>handleViewEmployee(e)}>
            View
          </Button>
        </div> */}
        <DataTable records={records}/>
      </div>
    </AppLayout>
  );
};

export default Employees;
