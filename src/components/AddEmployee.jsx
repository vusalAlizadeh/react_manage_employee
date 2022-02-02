import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const AddEmployee = ({ handleClose, handleShowAlert }) => {
  const { addNewEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChangeInput = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEmployee(newEmployee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name*"
          required
          name="name"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email*"
          required
          name="email"
          onChange={handleChangeInput}
        />
      </div>

      <div className="form-group mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Address"
          name="address"
          onChange={handleChangeInput}
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Phone*"
          required
          name="phone"
          onChange={handleChangeInput}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleShowAlert}
      >
        Add Employee
      </button>
      <button
        type="button"
        onClick={handleClose}
        className="btn btn-danger m-4"
      >
        Close
      </button>
    </form>
  );
};

export default AddEmployee;
