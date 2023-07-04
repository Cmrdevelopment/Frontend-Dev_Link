import React, { useState, useRef, useEffect } from 'react';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';
import './createExperience.css';
import handleExperienceResponse from '../../hooks/useExperience';
import { useForm } from 'react-hook-form';
import { technologies } from '../../data/object.tecnologias';

const createExperienceUser = () => {
  const { register, handleSubmit } = useForm();
  const [experienceData, setExperienceData] = useState({
    workedWith: '',
    duration: 0,
    technologies: [],
    description: '',
  });

  const [arrayTech, setArrayTech] = useState([]);

  const fileInput = useRef();

  const handleInputChange = (event) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = async (formData) => {
    console.log('entro');
    const file = fileInput.current.files[0];

    formData = { ...formData, technologies: arrayTech };

    if (file) {
      formData = { ...formData, image: file };
    }
    try {
      const res = await createExperience(formData);
      console.log(res.data);
      handleExperienceResponse(res);
    } catch (err) {
      console.log(err);
      handleExperienceResponse(err.response);
    }
  };

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
  
  useEffect(() => {
    console.log('🍟', arrayTech);
  }, [arrayTech]);

  return (
    <>
    
      <form onSubmit={handleSubmit(formSubmit)} className="form_Create">

      <section className="form_Create-empresa-duracion-descripcion">

        <div className="form-empresa-duracion">

          <label className="form-label-empresa form-label-global-empresa-duracion">
            <input
            className="form-input-empresa"
              type="text"
              placeholder="Empresa"
              name="workedWith"
              
              {...register('workedWith', { required: true })}
            />
          </label>
          
        
        <label className="form-label-duracion form-label-empresa-duracion">
          <input
          className="form-input-duracion"
            type="number" min="0" max="50"
            
            placeholder={experienceData.duration ? '' : 'Duración'}
            name="duration"
            
            {...register('duration')}
          />
        </label>
        </div>
        
        <label className="form-label">
          <input
          className="form-input-description-input"
            type="text"
            placeholder="Descripción"
            name="description"
            
            {...register('description')}
          />
        </label>
        </section>
        

        <section className="Create_Experiencia-tecnologías-Uploadfile_photo_profile">
        <label className="form-label-Create_Experiencia-tecnologías-Uploadfile_photo_profile">
          {' '}
          Tecnologias
          <div className="tecnologies-experience">
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
        </label>
        <div className="form-Uploadfile_photo_profile">
          <Uploadfile
            className="form-Uploadfile_photo_profile"
            registerForm={{ ref: fileInput }}
          />
        </div>
        </section>
        <button type="submit" className="btn_profile_general">
          GUARDAR EXPERIENCIA
        </button>
      </form>
    </>
  );
};

export default createExperienceUser;
