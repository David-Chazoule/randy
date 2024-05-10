import React from "react";
import sunnyImg from "../img/sun.jpg";

export default function Sunny() {
  return (
    <div className="container-caracter">
      <img src={sunnyImg} alt="" />
      <h3 className="title-name">Sunny les bon tuyaux</h3>
      <p className="description">
        Enfant des rues, autrefois magouilleur, aujourd'hui repentant, cet
        ancien gangster qui a déjà purgé sa peine est devenu les yeux et les
        oreilles vigilants de Raiden Jones. Toujours à l'affût, il anticipe les
        mauvais coups qui se préparent dans les ruelles de Panam City, informant
        discrètement son mentor des menaces imminentes.
      </p>
      <span className="line"></span>
    </div>
  );
}
