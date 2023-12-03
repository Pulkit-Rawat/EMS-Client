import React, { useState } from "react";
import Select from "react-select";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { api } from "../../utilities/axios";

const AssignDepartmentModal = ({
  isOpen = false,
  toggle = null,
  departments = [],
  empData = {},
}) => {
  const [currDept, setCurrDept] = useState("");
  const assignDept = async () => {
    try {
      let payload = {
        dptId: currDept,
        userId: empData._id,
      };
      const { data } = await api.post("assignDeptToEmployee", payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal centered isOpen={isOpen}>
      <ModalHeader toggle={toggle}>Assign Department</ModalHeader>
      <ModalBody>
        <div>
          <p>Select Member</p>
          <Select
            onChange={(e) => setCurrDept(e.value)}
            options={departments}
          />
        </div>
        <div className="text-end mt-2">
          <Button
            onClick={assignDept}
            outline
            color="primary"
            size="sm"
            className="ms-auto px-4"
          >
            Save
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AssignDepartmentModal;
