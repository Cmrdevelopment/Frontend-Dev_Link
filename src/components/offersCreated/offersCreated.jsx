import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';
import './offersCreated.css';
import { updateOffer } from '../../services/API_proyect/offer.service';
import DeleteOfferButton from '../DeleteOffer/DeleteOffer';

const OffersCreated = () => {
  const [offers, setOffers] = useState([]);
  const { user } = useAuth();

  const handleOfferStateChange = async (offerId, newOfferState) => {
    try {
      const formData = new FormData();
      formData.append('offerState', newOfferState);
      await updateOffer(offerId, formData);
      setOffers(
        offers.map((offer) => {
          if (offer._id === offerId) {
            return {
              ...offer,
              offerState: newOfferState,
            };
          }
          return offer;
        }),
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la oferta:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userOffer = await getUserById(user._id);

        console.log(userOffer);
        if (userOffer) {
          setOffers(userOffer.data.offersCreated);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className="offer-create-container_general experience-p-container_general">
      <h3>Ofertas Creadas</h3>
      {offers.length > 0 ? (
        <ul>
          {offers.map((offer) => (
            <li key={offer._id}>
              <h3>{offer.offerTitle}</h3>
              <p>Descripción: {offer.description}</p>
              <p>Ciudad: {offer.city}</p>
              <p>Tipo de trabajo: {offer.jobType}</p>
              <p>
                Estado de la oferta:
                <select
                  className="select-offer-change-state"
                  value={offer.offerState}
                  onChange={(e) => handleOfferStateChange(offer._id, e.target.value)}
                >
                  <option value="Close">Close</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Open">Open</option>
                </select>
              </p>
              <p>Tecnologías: {offer.technologies.join(', ')}</p>
              <DeleteOfferButton
                  id={offer._id}
                  offers={offers}
                  setOffers={setOffers}
                />
            
            </li>
          ))}
        </ul>
      ) : (
        <p className="offer-create-container_general_no_ofertas">
          No hay ofertas creadas.
        </p>
      )}
    </section>
  );
};

export default OffersCreated;
