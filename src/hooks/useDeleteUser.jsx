import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { deleteUser } from '../services/API_proyect/user.service';
import { Navigate } from 'react-router-dom';

const useDeleteUser = (setUser, logout) => {
  Swal.fire({
    title: 'Estás seguro de que quieres borrar tu perfil?',
    text: 'Al borrarlo perderás toda la información del perfil ⛔',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'rgb(73, 193, 162)',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await deleteUser();
      switch (res.status) {
        case 200:
          Swal.fire({
            icon: 'success',
            title: 'User Deleted',
            text: 'See you later!',
            showConfirmButton: false,
            timer: 1500,
          });
          setUser(() => null);
          localStorage.removeItem('user');
          logout();
          return <Navigate to="/home" />;

        default:
          Swal.fire({
            icon: 'error',
            title: 'User not deleted',
            text: 'Please, try again',
            showConfirmButton: false,
            timer: 1500,
          });

          break;
      }
    }
  });
};

export default useDeleteUser;