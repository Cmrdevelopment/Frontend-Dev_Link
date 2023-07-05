import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import Uploadfile from '../Uploadfile';
import { createOffer } from '../../services/API_proyect/offer.service';
import './createOffer2.css';
import { technologies } from '../../data/object.tecnologias';
import handleOfferCreationResponse from '../../hooks/useCreateOffer';
import { NavLink } from 'react-router-dom';

const CreateOffer2 = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [arrayTech, setArrayTech] = useState([]);
  const offerTypes = ['CompanyOffer', 'FreelandOffer'];
  const jobTypes = ['Remote', 'Office', 'Hybrid'];
  const offerStates = ['Close', 'Suspended', 'Open'];
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [serverMessage, setServerMessage] = useState(null);

  const onSubmit = async (data) => {
    const inputfile = document.getElementById('file-upload').files;
    console.log(inputfile);
    let customFormData;

    if (inputfile.length !== 0) {
      customFormData = {
        ...data,
        annualSalary: parseInt(data.annualSalary),
        offerState: 'Open',
        technologies: arrayTech,
        image: inputfile[0],
      };
    }

    setSend(true);
    const response = await createOffer(customFormData);
    setRes(response);
    handleOfferCreationResponse(response);
    setSend(false);
  };

  useEffect(() => {
    if (res.status == 200) {
      console.log(res);
    }
  }, []);

  const createArrayTech = ({ target }) => {
    if (arrayTech.includes(target.id)) {
      setArrayTech((value) => {
        const customArray = [];
        value.forEach((element) => {
          if (target.id != element) customArray.push(element);
        });
        return customArray;
      });
    } else {
      setArrayTech((value) => {
        const customArray = [...value, target.id];
        return customArray;
      });
    }
  };

  return (
    <>
        <div className="crear-oferta-titulo">
        <h3 id="oferta-h3-general">¡Crea tu</h3>
        <p> </p>
        <h3 id="oferta-h3-general" className="h3-oferta">
        &nbsp; oferta!
        </h3>
      </div>
      <section className="createOffer2-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <section className="form-container-titulo-tipo-oferta-tecnologias-Uploadfile">
        <div>
          <div className="Create_Offer_form-field">
            <label className={`form-label ${errors.offerTitle ? 'required-label' : ''}`}>
            </label>
            <input
              className="input-create-offer-años-salario-ciudad"
              {...register('offerTitle', { required: true })}
              placeholder="Escribe el titulo de la oferta"
            />
            {errors.offerTitle && <p className="error-message">Este campo es obligatorio</p>}
          </div>
          <div className="form-field">
            {/* <label className="form-label">Tipo de oferta</label> */}
            <select
              id="createOffer-select"
              className={`input-select ${errors.offerType ? 'required-label' : ''}`}
              
              {...register('offerType', { required: true })}
            >
              {offerTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.offerType && <p className="error-message">Este campo es obligatorio</p>}
          </div>
        
          <div className="form-field-one">
            {/* <label className="form-label">Modalidad de trabajo</label> */}
            <select
              id="createOffer-select"
              className={`input-select ${errors.jobType ? 'required-label' : ''}`}
              {...register('jobType', { required: true })}
            >

              {jobTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.jobType && <p className="error-message">Este campo es obligatorio</p>}
          </div>
          </div>
          <div className="form-field-two">
            <label
              className={`form-label ${errors.technologies ? 'required-label' : ''}`}
            >
              {/* Tecnologías requeridas */}
            </label>
            <div className="tecnologies-Offer">
              {technologies.map((technology, index) => (
                <figure key={index} className="tecnologia-item" id={technology.name}>
                  <div className="image-container">
                    
                    <img
                      className="tech-image"
                      src={technology.image}
                      alt={technology.name}
                    />
                  </div>
                  <p className="tech-image-text">{technology.name}</p>
                  <input
                    type="checkbox"
                    name={technology.name}
                    id={technology.name}
                    onChange={createArrayTech}
                  />
                </figure>
              ))}
            </div>
            {errors.technologies && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>
          <div className="form-field-four_Uploadfile">
            <Uploadfile />
          </div>
          <div className="form-container-años-salario-ciudad">
          <div className="form-field">
            <label
              className={`form-label ${errors.annualSalary ? 'required-label' : ''}`}
            >
            </label>
            
            <input
              className="input-create-offer-años-salario-ciudad"
              {...register('experienceYears', { required: false })}
              placeholder="Años de experiencia"
            />
            {errors.annualSalary && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>
          
          <div className="form-field">
            <label
              className={`form-label ${errors.annualSalary ? 'required-label' : ''}`}
            >
              
            </label>
            <input
              className="input-create-offer-años-salario-ciudad"
              {...register('annualSalary', { required: true })}
              placeholder="Salario anual"
            />
            {errors.annualSalary && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>

          <div className="form-field">
            <label className={`form-label ${errors.city ? 'required-label' : ''}`}>
              
            </label>
            <input
              className="input-create-offer-años-salario-ciudad"
              {...register('city', { required: true })}
              placeholder="Ciudad"
            />
            
            {errors.city && <p className="error-message">Este campo es obligatorio</p>}
          </div>
          </div>
          </section>
          <section className="form-container-titulo-descripción-responsabilidades-requisitos-remuneracion">
          <div className="form-container-descripcion-ganeral-responsabilidades">
          <div className="form-field">
            
            <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
            </label>
            
            <textarea
              className="input-create-offer-dos"
              {...register('descriptionGeneral', { required: true })}
              placeholder="Descripción general"
            ></textarea>
            {errors.description && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>

          <div className="form-field">
            <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
              
            </label>
            <textarea
              className="input-create-offer-dos"
              {...register('descriptionResponsabilities', { required: true })}
              placeholder="Describe las Responsabilidades"
            ></textarea>
            {errors.description && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>
          </div>
          <div className="form-container-descripcion-requisitos-remuneracion">

          <div className="form-field">
            <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
              
            </label>
            <textarea
              className="input-create-offer-dos"
              {...register('descriptionRequires', { required: true })}
              placeholder="Comenta los Requisitos"
            ></textarea>
            {errors.description && (
              <p className="error-message">Este campo es obligatorio</p>
            )}
          </div>

          <div className="form-field">
            <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
              
            </label>
            <textarea
              className="input-create-offer-dos"
              {...register('descriptionSalary', { required: true })}
              placeholder="Comenta sobre la remuneración"
            ></textarea>
            
            {errors.description && (
              <p className="error-message">Este campo es obligatorio</p>
              
            )}
            
          </div>
          </div>
          </section>

          <div id="btn-offer" className="form-field">
            <input className="btn-submit-create-offer_dos" type="submit" value="Crear Oferta" />
          </div>
        </form>
    </section>
    </>
  );
};

export default CreateOffer2;
