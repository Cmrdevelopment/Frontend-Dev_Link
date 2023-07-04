export const getUserAverageScore = (user) => {
    if (user === null) {
        console.log("ERROR: getUserAverageScore -> user = null")
        return 0
    }
    if (user.ratingsByOthers.length === 0) {
        console.log("getUserAverageScore -> user.ratingsByOthers.length === 0")
        return 0
    }

    const totalScore = user.ratingsByOthers.reduce((acc, curr) => acc + curr.score, 0)
    const averageScore = totalScore / user.ratingsByOthers.length
    return averageScore
}

export const getOfferAverageScore = (offer) => {
    if (offer === null) {
        console.log("ERROR: getOfferAverageScore -> offer = null")
        return 0
    }

    if (offer.ratings.length === 0) {
        console.log("getOfferAverageScore -> offer.ratings.length === 0")
        return 0
    }

    const totalScore = offer.ratings.reduce((acc, curr) => acc + curr.score, 0)
    const averageScore = totalScore / offer.ratings.length
    return averageScore
}