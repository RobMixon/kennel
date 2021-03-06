import React from "react";
import './Owner.css';

const OwnerCard = (props) => {
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
        <p>Animal: {props.owner.animal}</p>
        <button type="button"
          onClick={() => props.history.push(`/owner/${props.owner.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Release</button>
      </div>
    </div>
  )
}

export default OwnerCard;