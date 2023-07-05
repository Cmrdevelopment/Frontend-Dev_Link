import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import './Offers.css'
import OffersList from "../../components/OffersList/OffersList";
import ExperienceYearsSlider from "../../components/offersComponts/ExperienceYearsSlider/ExperienceYearsSlider";
import JobTypeSelect from "../../components/offersComponts/JobTypeSelect/JobTypeSelect";
import OfferStateSelect from "../../components/offersComponts/OfferStateSelect/OfferStateSelect";
import OfferTypeSelect from "../../components/offersComponts/OfferTypeSelect/OfferTypeSelect";
import AnnualSalarySlider from "../../components/offersComponts/AnnualSalarySlider/AnnualSalarySlider";
import { NavLink } from "react-router-dom";

const Offers = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 880 });
    const [valueExperienceYearsSlider, setValueExperienceYearsSlider] = useState(() => "");
    const [valueAnnualSalarySlider, setValueAnnualSalarySlider] = useState(10000);
    const [valueJobTypeSelect, setValueJobTypeSelect] = useState('All');
    const [valueOfferStateSelect, setValueOfferStateSelect] = useState('All');
    const [valueOfferTypeSelect, setValueOfferTypeSelect] = useState('All');

    const [filtersToApply, setFiltersToApply] = useState({

        // CompanyOffer, FreelandOffer
        offerType: "",

        // 0 to 100
        experienceYears: "",

        // number
        annualSalary: "",

        // Remote, Office, Hybrid
        jobType: "",

        // Close, Suspended, Open
        offerState: "",
    })

    const handleChangeExperienceYearsSlider = (event, newValue) => {
        setValueExperienceYearsSlider(event.target.value);
    };

    const handleChangeAnnualSalarySlider = (event, newValue) => {
        setValueAnnualSalarySlider(newValue);
    };

    const handleChangeJobTypeSelect = (event) => {
        setValueJobTypeSelect(event.target.value);
    };

    const handleChangeOfferStateSelect = (event) => {
        setValueOfferStateSelect(event.target.value);
    };

    const handleChangeOfferTypeSelect = (event) => {
        setValueOfferTypeSelect(event.target.value);
    };

    useEffect(() => {
        //console.log("Offers --> Before --> setFiltersToApply(filters)", filters)
        setFiltersToApply({ ...filtersToApply, experienceYears: valueExperienceYearsSlider })
        //console.log("Offers --> After --> setFiltersToApply(filters)", filters)
    }, [valueExperienceYearsSlider]);

    useEffect(() => {
        setFiltersToApply({ ...filtersToApply, annualSalary: valueAnnualSalarySlider })
    }, [valueAnnualSalarySlider]);

    useEffect(() => {
        setFiltersToApply({ ...filtersToApply, jobType: valueJobTypeSelect })
    }, [valueJobTypeSelect]);

    useEffect(() => {
        setFiltersToApply({ ...filtersToApply, offerState: valueOfferStateSelect })
    }, [valueOfferStateSelect]);

    useEffect(() => {
        setFiltersToApply({ ...filtersToApply, offerType: valueOfferTypeSelect })
    }, [valueOfferTypeSelect]);

    return (
        <div className="outletContainer">
            {isLargeScreen ?
                <h2 className="offerTit">
                    ¡Ven y consulta nuestras ofertas de trabajo para Desarrolladores!

                </h2>
                :
                <h2 className="offerTit">
                    Sigue nuestras ofertas de trabajo
                </h2>
            }

            <div className="spinner"></div>
            <div className="offers-filters-and-offersList-container">
                <div className="offers-filters-container">
                    <h2>Filtros</h2>
                    <section className="offers-filter-offerType-jobType-offerState-container">
                        <div className="offers-filter-offerType-container">
                            <OfferTypeSelect
                                value={valueOfferTypeSelect}
                                onChange={handleChangeOfferTypeSelect}
                            />
                        </div>
                        <div className="offers-filter-jobType-container">
                            <JobTypeSelect
                                value={valueJobTypeSelect}
                                onChange={handleChangeJobTypeSelect}
                            />
                        </div>
                        <div className="offers-filter-offerState-container">
                            <OfferStateSelect
                                value={valueOfferStateSelect}
                                onChange={handleChangeOfferStateSelect}
                            />
                        </div>
                    </section>
                    <section className="offers-filter-experienceYears-annualSalary-container">
                        <div className="offers-filter-experienceYears-container">
                            <p>Años de experiencia:</p>
                            <ExperienceYearsSlider

                                onChange={handleChangeExperienceYearsSlider}
                            />
                            {typeof filtersToApply.experienceYears == "string" && (<p style={{ color: "red" }}>No utilizado</p>)}
                        </div>
                        <div className="offers-filter-annualSalary-container">
                            <p>Salario anual:</p>
                            <AnnualSalarySlider
                                value={valueAnnualSalarySlider}
                                onChange={handleChangeAnnualSalarySlider}
                            />
                            {typeof filtersToApply.annualSalary == "string" && (<p style={{ color: "red" }}>No utilizado</p>)}
                        </div>
                    </section>
                    <NavLink
                        to="/createOffer2"
                    >
                        <button className="offer-button-Create">
                            Crear Oferta
                        </button>
                    </NavLink>

                </div>
                <div className="offers-offersList-container">
                    {/* {console.log("send --> filters to apply: ", filtersToApply)} */}

                    {<OffersList filters={filtersToApply} itemsPerPage={10} />}
                </div>
            </div>
        </div>
    );
}

export default Offers