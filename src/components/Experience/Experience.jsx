import React, { useState } from 'react';
import CreateExperienceUser from '../createExperience/createExperience';
import MyExperience from '../myExperience/myExperience';
import "./Experience.css"

const Experience = () => {
  const [show, setShow] = useState('create');

  const handleButtonClick = (component) => () => {
    setShow(component);
  };

  return (
    <>
      <section className="btn_profile_general-create-my-experience">
        <button
          className="btn_profile_general-my-expe"
          onClick={handleButtonClick('create')}
        >
          Crear Experiencia
        </button>
        <button className="btn_profile_general-my-expe" onClick={handleButtonClick('my')}>
          Mi Experiencia
        </button>
        {show === 'create' && <CreateExperienceUser />}

        {show === 'my' && <MyExperience />}
      </section>
    </>
  );
};

export default Experience;