import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import LocationManager from "../../modules/LocationManager"

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", title: "", locationId: 0});
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      title: employee.title,
      locationId: parseInt(employee.locationId)
    };

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push("/employees"))
  }

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId)
      .then(employee => {
        LocationManager.getAll()
        .then(location => {
          setLocation(location);
          setEmployee(employee);
          setIsLoading(false);
        })
      });
  }, [props.match.params.employeeId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={employee.title}
            />
            <label htmlFor="title">Title</label>
            <select
              className="form-control"
              id="locationId"
              value={employee.locationId}
              onChange={handleFieldChange}>
              {location.map(location =>
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              )}
            </select>
            <label htmlFor="locationId">location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm;