import Swal from 'sweetalert2';

const handleExperienceDeletionResponse = (res) => {
  if (res?.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Experiencia eliminada con éxito',
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error al eliminar la experiencia',
      text: 'Hubo un problema al intentar eliminar la experiencia. Por favor, intente de nuevo.',
      showConfirmButton: true,
    });
  }
};

export default handleExperienceDeletionResponse;
