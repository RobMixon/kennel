import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'

const LocationWithEmployee = props => {
  const [location, setLocation] = useState({name: "", address: ""});
  const [employee, setEmployees] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      });
  }, []);

  return (
    <div className="card">
      <p>Location: {location.name}</p>
      <p> address: {location.address}</p>
      {employee.map(employees =>
        <EmployeeCard
          key={employees.id}
          employees={employees}
          {...props}
        />
      )}
    </div>
  );
};

export default LocationWithEmployee;