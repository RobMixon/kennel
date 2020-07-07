import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("")} alt="My Dog" />
        </picture> */}
        <h3>
          Name: <span className="card-petname">Stan</span>
        </h3>
        <p>Owner of: Dan</p>
      </div>
    </div>
  );
};

export default OwnerCard;