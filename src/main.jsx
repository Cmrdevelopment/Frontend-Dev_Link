import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import { AuthContextProvider } from './contexts/authContext.jsx';
import CheckCode from './pages/CheckCode.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { Chat } from './components/ChatTemplate.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile';
import Developers from './pages/Developers/Developers';
//import DeveloperDetails from './pages/DeveloperDetails/DeveloperDetails';
import DeveloperDetails2 from './pages/DeveloperDetails2/DeveloperDetails2';
import OfferDetails from './pages/OfferDetails/OfferDetails';
import Offers from './pages/Offers/Offers';
import CreateOffer from './components/CreateOffer/CreateOffer';
// import CreateOffer2 from './components/CreateOffer2/CreateOffer2';
import AboutUs from './pages/AboutUs/AboutUs';
import UserProfile from './components/HeaderProfile/HeaderProfile';
import ChangePassword2 from './components/ChangePassword2/ChangePassword2';
import FormProfile from './components/FormProfile';
import ChangeEmail from './components/ChangeEmail/ChangeEmail';
import Experience from './components/Experience/Experience';
import Offer from './components/Offers/Offers';
import Tecnologias from './components/Tecnologias/Tecnologias';
import PrivateComment from './components/PrivateComment/PrivateComment';
// import PruebaEmotion from './pages/PruebaEmotion/PruebaEmotion';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          {/* he cambiado home por register */}
          <Route index element={<Home />} />
          {/* <Route index element={<PruebaEmotion />} /> */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          {/* <Route path="/developerDetails" element={<DeveloperDetails />} /> */}
          <Route path="/developerDetails" element={<DeveloperDetails2 />} />
          <Route path="/offerDetails" element={<OfferDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createOffer" element={<CreateOffer />} />
          {/* <Route path="/createOffer2" element={<CreateOffer2 />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<FormProfile />} />
            <Route path="/profile/changePassword" element={<ChangePassword2 />} />
            <Route path="/profile/changeEmail" element={<ChangeEmail />} />
            <Route path="/profile/experience" element={<Experience />} />
            <Route path="/profile/Offer" element={<Offer />} />
            <Route path="/profile/tecnologias" element={<Tecnologias />} />
            {/* <Route path="/profile/mensajePrivado" element={<PrivateComment />} /> */}
          </Route>
          <Route path="/verifyCode" element={<CheckCode />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>,
);
