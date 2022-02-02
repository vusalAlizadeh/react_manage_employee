import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditEmployee from "./EditEmployee";

const Employee = ({ employee, handleShowAlert }) => {
  const { name, email, address, phone, id } = employee;
  const { deleteEmployee } = useContext(EmployeeContext);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleClose();
  }, [employee]);

  const DeletedEmployee = (id) => {
    deleteEmployee(id);
    handleShowAlert();
  };
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>
          <OverlayTrigger placement="top" overlay={<Tooltip>edit</Tooltip>}>
            <button type="button" className="edit btn " onClick={handleShow}>
              <i className="material-icons">&#xE254;</i>
            </button>
          </OverlayTrigger>

          <OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
            <button
              onClick={() => DeletedEmployee(id)}
              type="button"
              className="delete btn"
            >
              <i className="material-icons">&#xE872;</i>
            </button>
          </OverlayTrigger>
        </td>
      </tr>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditEmployee
            handleClose={handleClose}
            employee={employee}
            handleShowAlert={handleShowAlert}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;
