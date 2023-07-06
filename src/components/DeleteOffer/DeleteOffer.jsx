import React from "react";
import { deleteOffer } from "../../services/API_proyect/offer.service";
import './deleteOffer.css';
import handleOfferDeletionResponse from "../../hooks/useDeleteOffer";


const DeleteOfferButton = ({id, offers, setOffers}) => {
    const handleDeleteOffer = async (id) => {
        const res = await deleteOffer(id);
        handleOfferDeletionResponse(res);
        if (res.status === 200) {
            setOffers(offers.filter((offer) => offer._id !== id));
        }
    };

        return (
            <button
            className="btn_profile_general btn_profile_general_delete_expe"
            onClick={() => handleDeleteOffer(id)}
            >
            Borrar Oferta
            </button>
        );
};

export default DeleteOfferButton;





