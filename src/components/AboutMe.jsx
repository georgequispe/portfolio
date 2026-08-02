import miFoto from '../assets/miFoto.jpg';
import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutMe = () => {
  return (
    <section className="container py-5" id="about">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow border-0">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                <img
                  src={miFoto}
                  alt="George Roberto Quispe Román"
                  className="img-fluid rounded-circle"
                  style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div className="col-md-8 p-4">
                <h3 className="card-title">George Roberto Quispe Román</h3>
                <p className="card-text">
                  Soy un desarrollador Full Stack recién graduado, motivado por el aprendizaje continuo y la mejora constante. Mi foco actual está en fortalecer mis habilidades prácticas en el ecosistema de React, Git y GitHub. Me apasiona construir aplicaciones web y estoy comprometido a aplicar buenas prácticas para crear código claro, escalable y bien estructurado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;