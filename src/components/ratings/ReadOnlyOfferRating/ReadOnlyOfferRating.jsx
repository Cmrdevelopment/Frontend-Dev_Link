import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import { getOfferAverageScore } from '../../../util/ratings';
import './ReadOnlyOfferRating.css'

const ReadOnlyOfferRating = ({ offer }) => {
    const [averageScore, setAverageScore] = useState(0);

    useEffect(() => {
        const averageScore = getOfferAverageScore(offer);
        setAverageScore(averageScore)
    }, [offer]);

    return (
        <Rating
            name="half-rating-read"
            defaultValue={0}
            value={averageScore}
            precision={0.5}
            readOnly
        />
    );
};

export default ReadOnlyOfferRating;
