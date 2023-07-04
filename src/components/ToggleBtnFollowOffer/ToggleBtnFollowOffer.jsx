import { useState, useEffect } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';
import "./ToggleBtnFollowOffer.css";

import { offer_toggleInterestedOfferToUser, offer_getFollowingStatus } from "../../services/API_proyect/offer.service";

const ToggleBtnFollowOffer = ({ offerToFollowId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const initializeFavoriteState = async () => {
            try {
                const isFav = await offer_getFollowingStatus(offerToFollowId);

                // console.log("ToggleBtnFollowOffer -> initializeFavoriteState -> isFav", isFav)
                if (isFav?.data?.status === "Offer is in user's offersInterested arr") {
                    setIsFavorite(true);
                } else {
                    setIsFavorite(false);
                }

            } catch (error) {
                console.error("Error while checking favorite status", error);
            }
        };
        initializeFavoriteState();
    }, [offerToFollowId]);

    const handleAddToFavorites = async () => {
        try {
            //const response = await app_ToggleApp(appId);
            const response = await offer_toggleInterestedOfferToUser(offerToFollowId);
            // if (
            //     response === "Offer added to user's offersInterested array" ||
            //     response === "Offer removed from user's offersInterested array"
            // ) {
            //     setIsFavorite(!isFavorite);
            // }

            setIsFavorite(!isFavorite);

        } catch (error) {
            console.error("Error while adding to favorites", error);
        }
    };

    return (
        <div>
            <button
                onClick={handleAddToFavorites}
                className={`no-border-button ${isFavorite ? "favorite" : ""}`}
            >
                {isFavorite ? (
                    <p>   Dejar de seguirla < RiUserUnfollowFill size={25} className="favorite-icon-pendiente-seguir" /></p>
                ) : (
                    <p> Sigue esta oferta <RiUserFollowFill size={25} className="favorite-icon-siguiendo" /> </p>
                )}
            </button>
        </div>
    );
};

export default ToggleBtnFollowOffer;
