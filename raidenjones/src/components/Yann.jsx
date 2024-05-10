import React from "react";
import yannou from "../img/yann.jpg";

export default function Yann() {
  return (
    <div className="container-caracter">
      <img src={yannou} alt="" />
      <h3 className="title-name">Yann</h3>
      <p className="description">
        Issu d'une famille aisée et fervent chrétien, père de cinq enfants, Yann
        est le voisin méfiant de Randy. Les allers-retours nocturnes, le
        vrombissement de la moto qui entre et sort du garage, ainsi que les
        séances de bricolage à des heures indues perturbent Yann. Convaincu que
        Randy est un trafiquant de drogue, il a appelé la police à plusieurs
        reprises, entraînant le déplacement des forces de l'ordre, et a failli
        compromettre la couverture de Randy.
      </p>

      <span className="line"></span>
    </div>
  );
}
