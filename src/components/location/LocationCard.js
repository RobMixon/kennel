import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          Name: <span className="card-petname">Sam</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default LocationCard;