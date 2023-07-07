// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useAuth } from '../../contexts/authContext';
// import Uploadfile from '../Uploadfile';
// import { createOffer } from '../../services/API_proyect/offer.service';
// import './CreateOffer.css';
// import { technologies } from '../../data/object.tecnologias';
// import handleOfferCreationResponse from '../../hooks/useCreateOffer';
// import { NavLink } from 'react-router-dom';

// const CreateOffer = () => {
//   const [res, setRes] = useState({});
//   const [send, setSend] = useState(false);
//   const [arrayTech, setArrayTech] = useState([]);
//   const offerTypes = ['CompanyOffer', 'FreelandOffer'];
//   const jobTypes = ['Remote', 'Office', 'Hybrid'];
//   const offerStates = ['Close', 'Suspended', 'Open'];
//   const { user } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const [serverMessage, setServerMessage] = useState(null);

//   const onSubmit = async (data) => {
//     const inputfile = document.getElementById('file-upload').files;
//     console.log(inputfile);
//     let customFormData;

//     if (inputfile.length !== 0) {
//       customFormData = {
//         ...data,
//         annualSalary: parseInt(data.annualSalary),
//         offerState: 'Open',
//         technologies: arrayTech,
//         image: inputfile[0],
//       };
//     }

//     setSend(true);
//     const response = await createOffer(customFormData);
//     setRes(response);
//     handleOfferCreationResponse(response);
//     setSend(false);
//   };

//   useEffect(() => {
//     if (res.status == 200) {
//       console.log(res);
//     }
//   }, []);

//   const createArrayTech = ({ target }) => {
//     if (arrayTech.includes(target.id)) {
//       setArrayTech((value) => {
//         const customArray = [];
//         value.forEach((element) => {
//           if (target.id != element) customArray.push(element);
//         });
//         return customArray;
//       });
//     } else {
//       setArrayTech((value) => {
//         const customArray = [...value, target.id];
//         return customArray;
//       });
//     }
//   };

//   return (
//     <div className="createOffer-container">
//       <div className="crear-oferta-titulo">
//         <h3 id="oferta-h3-general">¡Crea tu</h3>
//         <p> </p>
//         <h3 id="oferta-h3-general" className="h3-oferta">
//           oferta!
//         </h3>
//       </div>
//       <div className="form-container">
//         <form className="form" onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-field">
//             <label className={`form-label ${errors.offerTitle ? 'required-label' : ''}`}>
//               Título de la oferta
//             </label>
//             <input
//               className="input-create-offer"
//               {...register('offerTitle', { required: true })}
//               placeholder="Offer Title"
//             />
//             {errors.offerTitle && <p className="error-message">Este campo es obligatorio</p>}
//           </div>

//           <div className="form-field">
//             <label className="form-label">Tipo de oferta</label>
//             <select
//               id="createOffer-select"
//               className={`input-select ${errors.offerType ? 'required-label' : ''}`}
//               {...register('offerType', { required: true })}
//             >
//               {offerTypes.map((type, index) => (
//                 <option key={index} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//             {errors.offerType && <p className="error-message">Este campo es obligatorio</p>}
//           </div>

//           <div className="form-field-one">
//             <label className="form-label">Modalidad de trabajo</label>
//             <select
//               id="createOffer-select"
//               className={`input-select ${errors.jobType ? 'required-label' : ''}`}
//               {...register('jobType', { required: true })}
//             >
//               {jobTypes.map((type, index) => (
//                 <option key={index} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//             {errors.jobType && <p className="error-message">Este campo es obligatorio</p>}
//           </div>

//           <div className="form-field-two">
//             <label
//               className={`form-label ${errors.technologies ? 'required-label' : ''}`}
//             >
//               Tecnologías requeridas
//             </label>
//             <div className="tecnologies-Offer">
//               {technologies.map((technology, index) => (
//                 <figure key={index} className="tecnologia-item" id={technology.name}>
//                   <div className="image-container">
//                     <img
//                       className="tech-image"
//                       src={technology.image}
//                       alt={technology.name}
//                     />
//                   </div>
//                   <p className="tech-image-text">{technology.name}</p>
//                   <input
//                     type="checkbox"
//                     name={technology.name}
//                     id={technology.name}
//                     onChange={createArrayTech}
//                   />
//                 </figure>
//               ))}
//             </div>
//             {errors.technologies && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
//               Descripción general
//             </label>
//             <textarea
//               className="input-create-offer"
//               {...register('descriptionGeneral', { required: true })}
//             ></textarea>
//             {errors.description && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
//               Responsabilidades
//             </label>
//             <textarea
//               className="input-create-offer"
//               {...register('descriptionResponsabilities', { required: true })}
//             ></textarea>
//             {errors.description && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
//               Requisitos
//             </label>
//             <textarea
//               className="input-create-offer"
//               {...register('descriptionRequires', { required: true })}
//             ></textarea>
//             {errors.description && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
//               Remuneración
//             </label>
//             <textarea
//               className="input-create-offer"
//               {...register('descriptionSalary', { required: true })}
//             ></textarea>
//             {errors.description && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label
//               className={`form-label ${errors.annualSalary ? 'required-label' : ''}`}
//             >
//               Años de experiencia
//             </label>
//             <input
//               className="input-create-offer"
//               {...register('experienceYears', { required: false })}
//             />
//             {errors.annualSalary && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label
//               className={`form-label ${errors.annualSalary ? 'required-label' : ''}`}
//             >
//               Salario anual
//             </label>
//             <input
//               className="input-create-offer"
//               {...register('annualSalary', { required: true })}
//             />
//             {errors.annualSalary && (
//               <p className="error-message">Este campo es obligatorio</p>
//             )}
//           </div>

//           <div className="form-field">
//             <label className={`form-label ${errors.city ? 'required-label' : ''}`}>
//               Ciudad
//             </label>
//             <input
//               className="input-create-offer"
//               {...register('city', { required: true })}
//             />
//             {errors.city && <p className="error-message">Este campo es obligatorio</p>}
//           </div>

//           <div className="form-field-four">
//             <Uploadfile />
//           </div>

//           <div id="btn-offer" className="form-field">
//             <input className="btn-submit-create-offer" type="submit" value="Submit" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateOffer;
