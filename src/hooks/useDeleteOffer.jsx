import Swal from 'sweetalert2';

const handleOfferDeletionResponse = (res) => {
  if (res?.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Oferta eliminada con éxito',
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error al eliminar la oferta',
      text: 'Hubo un problema al intentar eliminar la oferta. Por favor, intente de nuevo.',
      showConfirmButton: true,
    });
  }
};

export default handleOfferDeletionResponse;