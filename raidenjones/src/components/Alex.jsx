import React from "react";
import alexImg from "../img/alex.jpg";
export default function Alex() {
  return (
    <div className="container-caracter">
      <img src={alexImg} alt="" />
      <h3 className="title-name">Commissaire Grandville</h3>
      <p className="description">
        Le commissaire Grandville incarne la quintessence de l'intégrité et de
        la détermination. Imbu de l'éthique rigoureuse du maintien de l'ordre,
        il est un fervent défenseur de la loi et de la justice. Son antipathie
        envers les méthodes peu orthodoxes de Raiden Jones est palpable, et il
        est résolu à le voir derrière les barreaux. Animé par un sens
        inébranlable du devoir, il poursuit son objectif avec une détermination
        implacable, prêt à tout pour rétablir l'ordre et la légalité dans Panam
        City.
      </p>
      <span className="line"></span>
    </div>
  );
}
