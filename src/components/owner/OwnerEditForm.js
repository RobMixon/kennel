import React, { useState, useEffect } from "react"
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerForm.css"

const OwnerEditForm = props => {
  const [owner, setOwner] = useState({ name: "", animal: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      animal: owner.animal
    };

    OwnerManager.update(editedOwner)
      .then(() => props.history.push("/owner"))
  }

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId)
      .then(owner => {
        setOwner(owner);
        setIsLoading(false);
      });
  }, [props.match.params.ownerId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Owner Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="animal"
              value={owner.animal}
            />
            <label htmlFor="animal">Animal</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default OwnerEditForm;