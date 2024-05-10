import React from "react";
import christophe from "../img/chris.jpg";

export default function Chris() {
  return (
    <div className="container-caracter">
      <img src={christophe} alt="" />
      <h3 className="title-name">Christophe</h3>
      <p className="description">
        Christophe incarne le séducteur invétéré, avec un palmarès de conquêtes
        qui laisse rêveur. En tant que rockeur charismatique et virtuose de la
        guitare, il captive les foules avec son charme envoûtant. Son amitié
        indéfectible avec Randy est ancrée dans la confiance mutuelle, où
        Christophe est le gardien du secret de son ami, le seul a connaitre la véritable identité de Rainder Jones. Malgré ses talents
        indéniables, il a un penchant pour les gaffes monumentales et les situations périeuses, se
        retrouvant souvent dans de nombreux problemes. Heureusement, la
        présence de Randy lui offre un soutien inébranlable pour naviguer à
        travers les tempêtes de la vie.
      </p>
      <span className="line"></span>
    </div>
  );
}
