import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employee, setEmployee] = useState([]);

  const getEmployee = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return EmployeeManager.getAll().then(EmployeeFromAPI => {
      setEmployee(EmployeeFromAPI)
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll().then(setEmployee));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployee();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/employees/new")}}>
      Hire Employee
  </button>
</section>
    <div className="container-cards">
      {employee.map(employees =>
       <EmployeeCard key={employees.id} employees={employees} deleteEmployee={deleteEmployee}/>)}
    </div>
    </>
  );
};
export default EmployeeList;