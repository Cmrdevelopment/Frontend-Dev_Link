import './Profile.css';

import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import UserProfile from '../components/HeaderProfile/HeaderProfile';
import { useAuth } from '../contexts/authContext';
import useDeleteUser from '../hooks/useDeleteUser';

const Profile = () => {
  const navigate = useNavigate();
  const { setUser, logout } = useAuth();
  const [activeButton, setActiveButton] = useState('Profile');
  // const navRef = useRef();
  // const showNavbar = () => {
  //   navRef.current.classList.toggle('responsive_nav');
  // };

  const [ancho, setAncho] = useState(window.innerWidth);

  const handleResize = () => {
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="profile-father-Container">
        {ancho < 800 && (
          <>
            <div id="wrap">
              <div id="sidebar">
                <NavLink to="/profile">
                  <div className="cambiar-contrasena">
                    <span>Editar perfil</span>
                  </div>
                </NavLink>

                <NavLink to="/profile/changePassword">
                  <div className="perfil-responsive">
                    <span>Cambiar contraseña</span>
                  </div>
                </NavLink>

                <NavLink to="/profile/changeEmail">
                  <div className="cambiar-email">
                    <span>Cambiar email</span>
                  </div>
                </NavLink>

                <NavLink to="/profile/experience">
                  <div className="profile-experience">
                    <span>Experiencia</span>
                  </div>
                </NavLink>

                <NavLink to="/profile/Offer">
                  <div className="offers-responsive">
                    <span>Oferta</span>
                  </div>
                </NavLink>

                <NavLink to="/profile/tecnologias">
                  <div className="tecnologies-responsive">
                    <span>Tecnologías</span>
                  </div>
                </NavLink>

                <div
                  className="borrar-perfil"
                  onClick={() => {
                    useDeleteUser(setUser, logout());
                    setActiveButton('Delete');
                  }}
                >
                  <span>Borrar perfil </span>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="header-profile">
          <UserProfile />
        </div>
        <div className="mainContainer">
          {ancho > 800 ? (
            <div className={`containerNavProfile`}>
              <button
                className={`btn-profile ${activeButton === 'Profile' ? 'active' : ''}`}
                onClick={() => {
                  setActiveButton('Profile');
                  navigate('/profile');
                }}
              >
                👨🏻‍⚕️ Perfil
              </button>

              <button
                className={`btn-profile ${activeButton === 'Password' ? 'active' : ''}`}
                onClick={() => {
                  setActiveButton('Password');
                  navigate('/profile/changePassword');
                }}
              >
                🔑 Contraseña
              </button>

              <button
                className={`btn-profile ${activeButton === 'Email' ? 'active' : ''}`}
                onClick={() => {
                  setActiveButton('Email');
                  navigate('/profile/changeEmail');
                }}
              >
                💌 Cambiar Email
              </button>
              <button
                className={`btn-profile ${activeButton === 'Experience' ? 'active' : ''}`}
                onClick={() => {
                  setActiveButton('Experience');
                  navigate('/profile/experience');
                }}
              >
                👷🏻‍♀️ Experiencia
              </button>
              <button
                className={`btn-profile ${activeButton === 'Offers' ? 'active' : ''}`}
                onClick={() => {
                  setActiveButton('Offers');
                  navigate('/profile/Offer');
                }}
              >
                📋 Ofertas
              </button>
              <button
                className={`btn-profile ${
                  activeButton === 'Tecnologias' ? 'active' : ''
                }`}
                onClick={() => {
                  setActiveButton('Tecnologias');
                  navigate('/profile/tecnologias');
                }}
              >
                📳 Tecnologías
              </button>

              <button
                className={`btn-profile ${activeButton === 'Delete' ? 'active' : ''}`}
                onClick={() => {
                  useDeleteUser(setUser, logout);
                  setActiveButton('Delete');
                  // navigate('/home');
                }}
              >
                🚮 Borrar Perfil
              </button>
            </div>
          ) : null}

          <div className="fluidContainerProfile">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

{
  /* <button className="nav-icon close-icon" onClick={handleNav}>
              <FaTimes />
            </button> */
}
//   <button className="nav-icon" onClick={handleNav}>
//   OPCIONES
// </button>
