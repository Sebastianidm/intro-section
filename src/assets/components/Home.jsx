import React from "react";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="ladoIzquierdo">
        <h1 className="titulo">
          Make <br /> Remote Work
        </h1>
        <p>
          Get your team in sync, no matter your location.
          <br />
          Streamline processes, create team rituals, and
          <br />
          watch productivity soar.
        </p>

        <button className="botonHome">Learn More</button>

        <ul className="listaIcono">
          <li>icono</li>
          <li>icono</li>
          <li>icono</li>
          <li>icono</li>
        </ul>
      </div>

      <div>
        <img
          className="imgHome"
          src="/src/assets/img/image-hero-desktop.png"
          alt="imagenMain"
        />
      </div>
    </div>
  );
};

export default Home;
