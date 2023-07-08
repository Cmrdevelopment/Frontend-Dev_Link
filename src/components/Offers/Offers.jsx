import './Offers.css';

import React, { useState } from 'react';

import OffersCreated from '../offersCreated/offersCreated';
import OffersInterested from '../OffersInterested/offersInterested';

const Offer = () => {
  const [showCreated, setShowCreated] = useState(true);

  const handleShowCreated = () => {
    setShowCreated(true);
  };

  const handleShowInterested = () => {
    setShowCreated(false);
  };

  return (
    <section className="Offers-Btn-filter">
      <button className="btn_profile_general-my-expe" onClick={handleShowCreated}>
        Mis ofertas
      </button>
      <button className="btn_profile_general-my-expe" onClick={handleShowInterested}>
        Ofertas que sigo
      </button>
      {showCreated ? <OffersCreated /> : <OffersInterested />}
    </section>
  );
};

export default Offer;
