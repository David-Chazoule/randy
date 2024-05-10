import React from "react";
import dav from "../img/david.jpg";

export default function David() {
  return (
    <div className="container-caracter">
      <img src={dav} alt="" />
      <h3 className="title-name">David</h3>
      <p className="description">
        Vétéran du Vietnam et ancien membre de l'escouade de Randy, il incarne
        le pacifisme et l'esprit hippie anti-guerre. Grand consommateur de
        psychotropes, il se fait appeler le "Jésus de l'amour" et ne manque
        jamais de délivrer une morale à Randy à la fin de chaque épisode.
        Ignorant que Randy est également Raiden Jones, il ajoute une dimension
        intrigante à l'histoire.
      </p>
      <span className="line"></span>
    </div>
  );
}
