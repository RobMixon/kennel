import React from "react";
import './Employee.css';

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          Name: <span className="card-employeeName">
            {props.employees.name}
          </span>
        </h3>
        <p>Title: {props.employees.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employees.id)}>FIRE!</button>
      </div>
    </div>
  );
};

export default EmployeeCard;