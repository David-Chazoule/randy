import React from "react";
import Tonyimg from "../img/tony.jpg";

export default function Tony() {
  return (
    <div className="container-caracter">
      <img src={Tonyimg} alt="" />
      <h3 className="title-name"> Agent Tony</h3>
      <p className="description">
        Tony, agent émérite de la CIA, est une figure énigmatique qui évolue
        dans les cercles les plus secrets de Panam City. Toujours fidèle à son
        devoir, il se tient aux côtés de Raiden Jones, travaillant de concert
        pour promouvoir le bien dans la métropole urbaine, mais ce faisant, ils
        doivent naviguer dans les eaux troubles de la clandestinité, en marge
        des directives de leurs supérieurs.
      </p>
      <span className="line"></span>
    </div>

  );
}
