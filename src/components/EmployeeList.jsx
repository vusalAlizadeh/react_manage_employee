import React from "react";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Employee from "./Employee";
import { Modal, Alert } from "react-bootstrap";
import AddEmployee from "./AddEmployee";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const {
    currentEmployee,
    employees,
    totalPageNum,
    setCurrentPage,
    currentPage,
  } = useContext(EmployeeContext);

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  useEffect(() => {
    handleClose();
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-6">
            <button href="#!" onClick={handleShow} className="btn btn-success">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </button>
          </div>
        </div>
      </div>

      <Alert variant="success" show={showAlert}>
        <b>Employees successfully updated </b>
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployee.map((employee) => {
            return (
              <Employee
                employee={employee}
                key={employee.id}
                handleShowAlert={handleShowAlert}
              />
            );
          })}
        </tbody>
      </table>

      <Pagination
        pages={totalPageNum}
        setCurrentPage={setCurrentPage}
        currentEmployee={currentEmployee}
        currentPage={currentPage}
        employees={employees}
      />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddEmployee
            handleClose={handleClose}
            handleShowAlert={handleShowAlert}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeList;
