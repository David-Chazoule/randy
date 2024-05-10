import React from "react";
import Maevaa from "../img/Maevaa.jpg";

export default function Maeva() {
  return (
    <div className="container-caracter">
      <img className="img" src={Maevaa} alt="" />
      <h3 className="title-name">Maeva</h3>
      <p className="description">
        Maeva, une jeune journaliste pleine d'ambition travaillant pour Panam
        News, est une force à part entière dans la jungle médiatique de la
        ville. Déterminée et perspicace, elle s'est donnée pour mission de
        percer le mystère entourant l'identité secrète de Raiden Jones. Avec sa
        détermination sans faille et son esprit vif, elle est prête à tout pour
        obtenir la vérité, peu importe les obstacles qui se dressent sur son
        chemin.
      </p>
      <span className="line"></span>
    </div>
  );
}
