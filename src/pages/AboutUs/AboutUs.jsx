import './AboutUs.css';

import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Code</h2>

            <p className="section-subtitle">
              {' '}
              Nuestra pasión por la programación y la comunidad nos impulsó a crear una
              plataforma donde los sueños digitales toman forma.
            </p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/djglk3cso/image/upload/v1686559547/UserFTProyect/rfimrylpbiixauupnmwq.png"
                alt="person-review"
                className="team-img"
              />
              <h3>CARLOS MARTIN</h3>
              <div className="team-info">
                <p>Las Palmas de Gran Canaria</p>
              </div>
              <p>
                Me apasionó la programación por su inmenso potencial para crear e innovar.
                Es a través de esta herramienta que podemos transformar ideas abstractas
                en soluciones tangibles y eficientes, para hacer así la vida más fácil y
                emocionante.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/Cmrdevelopment"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687259001/UserFTProyect/vs86srsiqyurqmqeeppt.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>AITOR GUTIÉRREZ</h3>

              <div className="team-info">
                <p>Madrid</p>
              </div>

              <p>
                Me adentré en la programación para explorar su impacto innovador en el
                campo del marketing, determinado en superar los límites tradicionales y
                crear experiencias que conecten de manera profunda con los usuarios.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/aaitorgutierrez"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687345050/ozi_dxjzjs.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>MARC MATEO</h3>

              <div className="team-info">
                <p>Barcelona</p>
              </div>

              <p>
                Para mi la programación es como un universo infinito de posibilidades,
                realmente con cada linea de código puedes llegar tan lejos como quieras.
                Me sumerjo en este mundo para convertir desafíos en oportunidades, siempre
                con el usuario como foco principal.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/ozillo"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1688033450/yo_cjcukd.jpg"
                alt="person-review"
                className="team-img"
              />
              <h3>ALEX MANZANO</h3>
              <div className="team-info">
                <p>Madrid</p>
              </div>
              <p>
                La programación despertó en mi una curiosidad especial. Me apasiona por su
                capacidad transformadora y creativa. Es el medio para convertir visiones
                en realidades. Descubrir nuevas posibilidades y hacer una diferencia
                impulsa mi dedicación.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/Alejandro-Manzano"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687627364/vegano_rvseme.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>IGOR LUZARRAGA</h3>

              <div className="team-info">
                <p>Barcelona</p>
              </div>

              <p>
                Soy un apasionado programador con una paciencia incansable. Disfruto cada
                línea de código como un desafío creativo, encontrando soluciones con
                perseverancia. La programación es mi lenguaje para dar vida a ideas y
                superar obstáculos con determinación.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/IgorLuzarraga"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687627660/1675093921794_r3evad.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>Jonathan Rodríguez</h3>

              <div className="team-info">
                <p>A Coruña</p>
              </div>

              <p>
                Soy un programador al que le apasiona crear soluciones completas y
                eficientes. Mi atención a los pequeños detalles asegura que cada aspecto
                del desarrollo esté cuidadosamente diseñado para ofrecer una user
                experience excepcional.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/jonathanrodvaz"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
