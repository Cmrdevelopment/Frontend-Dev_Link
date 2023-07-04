import React from 'react';
import { deleteExperience } from '../../services/API_proyect/experience.service';
import './DeleteExperience.css';
import handleExperienceDeletionResponse from '../../hooks/useDeleteExperience';

const DeleteExperienceButton = ({ id, experiences, setExperiences }) => {
  const handleDeleteExperience = async (id) => {
    const res = await deleteExperience(id);
    handleExperienceDeletionResponse(res);
    if (res.status === 200) {
      setExperiences(experiences.filter((experience) => experience._id !== id));
    }
  };

  return (
    <button
      className="btn_profile_general btn_profile_general_delete_expe"
      onClick={() => handleDeleteExperience(id)}
    >
      Borrar Experiencia
    </button>
  );
};

export default DeleteExperienceButton;
