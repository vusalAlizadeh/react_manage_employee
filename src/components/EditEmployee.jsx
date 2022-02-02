import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EditEmployee = ({ handleClose, employee, handleShowAlert }) => {
  const { name, email, address, phone, id } = employee;
  const [editEmployee, setEditEmployee] = useState({
    name,
    email,
    address,
    phone,
    id,
  });
  const { editedEmployee } = useContext(EmployeeContext);

  const handleChangeEdit = (e) => {
    setEditEmployee({ ...editEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmitEditedEmployee = (e) => {
    e.preventDefault();
    editedEmployee(id, editEmployee);
  };

  return (
    <form onSubmit={handleSubmitEditedEmployee}>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name*"
          required
          name="name"
          value={editEmployee.name}
          onChange={handleChangeEdit}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email*"
          required
          name="email"
          value={editEmployee.email}
          onChange={handleChangeEdit}
        />
      </div>

      <div className="form-group mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Address"
          name="address"
          value={editEmployee.address}
          onChange={handleChangeEdit}
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Phone*"
          required
          name="phone"
          value={editEmployee.phone}
          onChange={handleChangeEdit}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleShowAlert}
      >
        Edit Employee
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

export default EditEmployee;
