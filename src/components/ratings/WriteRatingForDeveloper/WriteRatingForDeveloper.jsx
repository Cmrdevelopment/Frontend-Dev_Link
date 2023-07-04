import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import { createRating, getByReference, updateRating } from '../../../services/API_proyect/rating.service';
import { useAuth } from '../../../contexts/authContext';
import './WriteRatingForDeveloper.css'

// We made the rating to userToRate
const WriteRatingForDeveloper = ({ userToRate }) => {
    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(-1);
    const [userRatingsFromDB, setUserRatingsFromDB] = useState({});
    const [userRatingsFromDBFirstTime, setUserRatingsFromDBFirstTime] = useState({});
    const [responseCreateRating, setResponseCreateRating] = useState({})
    const [responseUpdateRating, setReponsesUpdateRating] = useState({})

    const userLoged = user

    // console.log("WriteRatingForDeveloper -> userLoged: ", userLoged)

    // If userLogged === null means that we're not logged
    if (userLoged === null) return null

    // If the user to rate is the user loged, we just leave
    if (userToRate._id === userLoged._id) return null;

    // const getUserRatingsFromDB = async () => {
    //     setUserRatingsFromDB(await getByReference("User", userToRate._id))
    // }

    // const getUserRatingsFromDBFirstTime = async () => {
    //     setUserRatingsFromDBFirstTime(await getByReference("User", userToRate._id))
    // }

    const getUserRatingsFromDB = async () => {
        const dataFromDB = await getByReference("User", userToRate._id)

        console.log("getUserRatingsFromDB -> dataFromDB: ", dataFromDB)

        if (dataFromDB.status == 200) {
            setUserRatingsFromDB(dataFromDB)
        } else {
            console.log("error: Fail getByReference in getUserRatingsFromDB")
        }

        // TODO: Show error with swal
    }

    const getUserRatingsFromDBFirstTime = async () => {

        const dataFromDB = await getByReference("User", userToRate._id)

        if (dataFromDB.status == 200) {
            setUserRatingsFromDBFirstTime(dataFromDB)
        } else {
            console.log("error: Fail getByReference in getUserRatingsFromDBFirstTime")
        }

        // TODO: Show error with swal
    }

    const createOrUpdateRating = async (userRatingsFromDB) => {
        console.log("createOrUpdateRating -> userRatingsFromDB: ", userRatingsFromDB)

        if (userRatingsFromDB?.data) {
            // const filterRating = userRatingsFromDB.data.filter((rating) => rating.owner == userLoged._id);
            const filterRating = userRatingsFromDB.data.filter((rating) => rating.owner._id == userLoged._id);

            if (filterRating.length == 0) {
                setResponseCreateRating(await createRating({ "score": ratingValue, "referenceDeveloper": userToRate._id }));
                setUserRatingsFromDB({});
            } else {
                setReponsesUpdateRating(await updateRating({ "score": ratingValue, "referenceDeveloper": userToRate._id }, filterRating[0]._id));
                setUserRatingsFromDB({});
            }
        }
    };

    const showFirstTimeRating = async (userRatingsFromDB) => {
        console.log("showFirstTimeRating -> userRatingsFromDB: ", userRatingsFromDB)
        if (userRatingsFromDB?.data) {
            console.log("showFirstTimeRating -> userRatingsFromDB.data: ", userRatingsFromDB.data)
            const filterRating = userRatingsFromDB.data
                // .filter((rating) => rating.referenceDeveloper._id == userToRate._id);
                .filter((rating) => {
                    console.log("showFirstTimeRating -> rating.referenceDeveloper: ", rating.referenceDeveloper)
                    return rating.referenceDeveloper == userToRate._id
                })

            if (filterRating.length == 0) {
                console.log("showFirstTimeRating -> filterRating.length == 0: ", filterRating.length)
                setRatingValue(-1)
                setUserRatingsFromDBFirstTime({});
            } else {
                console.log("showFirstTimeRating -> filterRating.length != 0: ", filterRating.length)
                setRatingValue(filterRating[0].score)
                setUserRatingsFromDBFirstTime({});
            }
        }
    };

    useEffect(() => {
        if (ratingValue != -1) {
            getUserRatingsFromDB()
        }
    }, [ratingValue]);


    ///////////////////////////
    useEffect(() => {
        getUserRatingsFromDBFirstTime()
    }, []);
    //////////////////////////////

    useEffect(() => {
        console.log("response create Rating: ", responseCreateRating)
    }, [responseCreateRating]);

    useEffect(() => {
        console.log("response update Ratins: ", responseUpdateRating)
    }, [responseUpdateRating]);

    useEffect(() => {
        createOrUpdateRating(userRatingsFromDB);
    }, [userRatingsFromDB]);

    ////////////////////////////////
    useEffect(() => {
        showFirstTimeRating(userRatingsFromDBFirstTime)
        //console.log("Rating first time")
    }, [userRatingsFromDBFirstTime]);
    ////////////////////////////////



    return (
        <div>
            <Rating
                name="Write Ratings For Developer"
                value={ratingValue}
                onChange={(event, newRatingValue) => {
                    setRatingValue(newRatingValue);
                }}
            />
        </div>
    );
}

export default WriteRatingForDeveloper