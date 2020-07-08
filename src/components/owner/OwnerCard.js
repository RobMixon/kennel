import React from "react";
import './Owner.css'

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("")} alt="My Dog" />
        </picture> */}
        <h3>
          Name: <span className="card-ownerName">
            {props.owner.name}
          </span>
        </h3>
        <p>Title: {props.owner.title}</p>
      </div>
    </div>
  );
};

export default OwnerCard;