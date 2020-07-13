import React from "react";
import './Location.css';
import { Link } from "react-router-dom";

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
        <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Destroy!</button>
        <Link to={`/locations/${props.locations.id}`}>
        <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;