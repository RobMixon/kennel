import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = (props) => {
  // The initial state is an empty array
  const [owner, setOwner] = useState([]);

  const getOwner = () => {
    return OwnerManager.getAll().then(ownerFromAPI => {
      console.log(ownerFromAPI,"getting owners")
      setOwner(ownerFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwner));
  };

  // got the animals from the API on the component's first render

  useEffect(() => {
    getOwner();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/owner/new")}}>
      Admit Owner
  </button>
</section>
    <div className="container-cards">
      {owner.map(owner => 
      <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>
      )}
    </div>
    </>
  );
}
export default OwnerList;