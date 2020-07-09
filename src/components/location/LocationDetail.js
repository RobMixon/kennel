import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [locations, setLocation] = useState({ name: "", address: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationsId)
      .then(locations => {
        setLocation({
          name: locations.name,
          address: locations.address
        });
      });
  }, [props.locationsId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{locations.name}</span></h3>
        <p>Address: {locations.address}</p>
      </div>
    </div>
  );
}

export default LocationDetail;