import React from "react";
import Scient from "../img/randyscien.jpg";
import Raiden from "../img/randyBike.jpg";
import Viet from "../img/randyviet.jpg";
import kufu from "../img/randkun-fu.jpg";
import para from "../img/randypara.jpg";
import esca from "../img/randyesca.jpg";

export default function Randy() {
  return (
    <div className="container-caracter">
      <h2>
        Dans les années 80, dans la mégapole américaine de Panam City, la
        criminalité règne en maître. Les rues résonnent des pas lourds des
        gangs, de la mafia et d'autres bandits qui terrorisent la ville dès que
        la nuit tombe. Mais dans l'ombre de cette criminalité rampante, un homme
        seul a décidé de lutter contre le mal.
      </h2>
      <p>
        Son nom:  <span className="raiden">RAIDEN JONES.</span>{" "}
      </p>{" "}
      <p>
        Randy le jour, éminent chercheur et professeur à l'université de Panam
        City
      </p>
      <img src={Scient} alt="" />
      <p>
        et Raiden Jones la nuit, un super-héros masqué des temps modernes
        chevauchant sa moto à travers les rues à la recherche des pires
        criminels. Raiden Jones est déterminé à ramener la paix.
      </p>
      <img src={Raiden} alt="" />
      <p>
        {" "}
        Vétéran hautement décoré de la guerre du Vietnam, maître dans l'art du
        combat et expert en maniement des armes, il a été honoré à maintes
        reprises pour ses actes de bravoure.
      </p>
      <img src={Viet} alt="" />
      <p>
        Pratiquant du Kyokushin, du Wing Chun et du Shaolinquan, il allie la
        puissance brute à la finesse martiale.
      </p>
      <img src={kufu} alt="" />
      <p>
        Entraîné aux rouages des commandos, il évolue avec une aisance
        déconcertante même dans les situations les plus périlleuses.
      </p>
      <img src={para} alt="" />
      <img src={esca} alt="" />
      <p>
        Son seul dessein : défendre la justice et combattre le mal sous toutes
        ses formes.
      </p>

      <span className="line"></span>
    </div>
  );
}
