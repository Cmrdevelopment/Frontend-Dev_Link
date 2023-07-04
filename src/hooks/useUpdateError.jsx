import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useUpdateError = (res, setChangeProfileDataOk) => {
  let contador;
  //! if para comprobar con un contador que no tenemos nada en false es decir no se ha actualizado
  if (res?.data) {
    contador = 0;
    res?.data?.testUpdate?.map((item) => {
      console.log('entro');
      for (let clave in item) {
        if (item[clave] == false) {
          contador++;
        }
      }
    });
  }

  //! ---------- 200: cuando se ha actualizado todo
  if (contador == 0) {
    let check = '';
    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == true) {
          check += `- ${clave} - `;
        }
      }
    });
    setChangeProfileDataOk(() => true);
    Swal.fire({
      icon: 'success',
      title: `¡Perfil de usuario actualizado!`,
      text: ` Update: ${check} `,
      showConfirmButton: false,
      timer: 4000,
    });
  }
  //! //! ----------200:  cuando algo no se actualiza
  if (contador > 0) {
    let error = '';
    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == false) {
          error += `- ${clave} - `;
        }
      }
    });
    Swal.fire({
      icon: 'error',
      title: `Error updating user: ${error} ❎`,
      text: 'POr favor, prueba de nuevo',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ----------------- 500 || 404

  if (res?.response?.status == 500 || res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '¡Error Interno del Servidor! ¡Usuario no actualizado!',
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useUpdateError;
