import './CardOffer.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyOfferRating from '../ratings/ReadOnlyOfferRating/ReadOnlyOfferRating'
import ToggleBtnFollowOffer from '../ToggleBtnFollowOffer/ToggleBtnFollowOffer';
import { FaMapMarker } from 'react-icons/fa';

import { BsCalendarDay } from 'react-icons/bs';
const CardOffer = ({ offer }) => {
    const navigate = useNavigate();
    const pathToOfferDetails = `/offerDetails`;


    //console.log("CardOffer --> offer: ", offer)
    return (
        <section className="cardOffer-Info">
            <section className="cardOffer-link-to-offerDetails"
                onClick={() =>
                    navigate(pathToOfferDetails, {
                        state: { id: offer._id },
                    })
                }
            >
                <div className="cardOffer-Info-img-ratings">
                <img className="cardOffer-Info-img" src={offer.image} alt={`offer's ${offer.offerTitle} pic`} />
                <div className="cardOffer-Info-ratings">
                    <ReadOnlyOfferRating offer={offer} />
                </div>
                </div>
            </section>
            <section className="cardOffer-paragraph">
                <div className="cardOffer-Profile">
                    <div className="cardOffer-Info-tabla-name">
                        {offer.offerTitle}
                        <p className="cardOffer-Info-AnnualSalary">   (&euro;): {offer.annualSalary}</p>
                    </div>
                    <p className="cardOffer-Info-Ubicado"> <FaMapMarker /> {offer.city}</p>
                    <div className="cardOffer-Info-grupo-technologies">
                    <h4 className="cardOffer-Info-technologies">{offer.technologies.join(', ')}</h4>
                    <p className="cardOffer-Info-Experiencia">
                    <BsCalendarDay /> Se valora {offer.experienceYears} año/s de experiencia
                    </p>
                    <div className="cardOffer-BtnToggle">
                    <ToggleBtnFollowOffer offerToFollowId={offer._id} />
                    </div>
                    </div>
                </div>
            </section>
            
        </section>
    );
};

export default CardOffer;
