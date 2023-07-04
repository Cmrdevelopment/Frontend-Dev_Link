import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { offer_getAll } from "../../services/API_proyect/offer.service"
import "./OffersList.css";
import { Spinner } from "../Spinner/Spinner";
import CardOffer from "../CardOffer/CardOffer";
import { sortOfersByAverageScore_descendingOrder } from "../../util/filters/offer.filter";


const OffersList = ({ filters, itemsPerPage }) => {
    const [dataDevelopersList, setDataDevelopersList] = useState([]);
    const [downloading, setDownloading] = useState(false);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [pageCount, setPageCount] = useState(0);
    const [itemPerPage, setItemPerPage] = useState([])


    const [filtersToApply, setFiltersToApply] = useState(filters)

    const getOffersData = async () => {
        setDownloading(true);
        const dataOffer = await offer_getAll()
        const dataToRender = dataOffer.data


        ////! filtramos la data

        console.log(typeof filters.experienceYears)
        const copyFilters = { ...filters }
        if (typeof filters.experienceYears == "string") copyFilters.experienceYears = 10
        if (filters.experienceYears == 1.0001) copyFilters.experienceYears = 1
        if (filters.jobType == "All") copyFilters.jobType = ""
        if (filters.offerState == "All") copyFilters.offerState = ""
        if (typeof filters.annualSalary == "string") copyFilters.annualSalary = 10000
        if (filters.offerType == "All") copyFilters.offerType = ""

        //console.log(filters)
        if (dataOffer?.status == 200) {
            const dataFiltered = dataToRender.filter((offer) => {
                // console.log("offer: ", offer)
                // console.log("filters: ", filters)
                return (
                    offer.offerType.includes(copyFilters.offerType) &&
                    offer.offerState.includes(copyFilters.offerState) &&
                    offer.jobType.includes(copyFilters.jobType) &&
                    offer.annualSalary >= parseInt(copyFilters.annualSalary) &&
                    offer.experienceYears <= parseInt(copyFilters.experienceYears)
                )
            }
            )

            // Igor 28-06-2023
            // Filter offers by average score
            const dataSortByAverageScore =
                sortOfersByAverageScore_descendingOrder(dataFiltered);


            // const dataFilteredZero = dataFiltered.slice(0, itemsPerPage)
            // const numerberPage = Math.ceil(dataFiltered.length / itemsPerPage)
            const dataFilteredZero = dataSortByAverageScore.slice(0, itemsPerPage)
            const numerberPage = Math.ceil(dataSortByAverageScore.length / itemsPerPage)
            // Igor 28-06-2023

            setPageCount(numerberPage)
            setDataDevelopersList(dataFiltered)
            setItemPerPage(dataFilteredZero)
            setDownloading(false);

        } else {
            /// lanzar swall diciendo hay un error
        }

    };


    useEffect(() => {
        //console.log("OffersList --> filters: ", filters)
        setFiltersToApply(filters)
        //console.log("After --> setFiltersToApply(filters)", filters)
    }, [filters]);

    useEffect(() => {
        //console.log("OffersList --> getOffersData: ")
        getOffersData();
    }, [filters]);

    const handlePageClick = (event) => {
        //console.log(event) /// selected empieza por 0
        const end = (event.selected * itemsPerPage) + itemsPerPage == 0 ? itemsPerPage : (event.selected * itemsPerPage) + itemsPerPage
        const developersListWithOffset = dataDevelopersList.slice(end - itemsPerPage, end);
        setItemPerPage(developersListWithOffset)
    };

    return (
        <div className="offersList-container">
            {downloading ? (
                <Spinner />
            ) : (
                <div className="offersList-paginate-and-offers-list-container">

                    <div className="offersList-offers-container">
                        <h2>Ofertas</h2>
                        {itemPerPage.map((offer) => (
                            <div key={offer._id}>
                                <CardOffer offer={offer} />
                            </div>
                        ))}
                    </div>

                    < ReactPaginate
                        className="offersList-paginate"
                        activeClassName="offersList-paginate-active-element"
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            )}
        </div>
    );
};



export default OffersList;