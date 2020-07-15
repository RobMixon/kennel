import React from "react";
import './Location.css';


const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          Name: <span className="card-locationName">
          {props.locations.name}
          </span>
        </h3>
        <p>Address: {props.locations.address}</p>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
          Edit
        </button>
        {props.deleteLocation &&
        <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Destroy!</button>}
        <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locations.id}/details`) }}>Details</button>
      </div>
    </div>
  );
};

export default LocationCard;