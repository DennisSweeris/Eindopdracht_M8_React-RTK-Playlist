import { React, Fragment } from "react";
import Picture from "../imgs/Self.png";

function About() {
  return (
    <Fragment>
      <div className="about-container">
        <header>
          <q className="quote-left">
            Je bepaalt zelf je tempo en bent verantwoordelijk voor je eigen leerproces.
          </q>
          <img src={Picture} alt="Picture of myself"></img>
          <q className="quote-right">Leer wat je leren kan, practice makes perfect.</q>
        </header>

        <div className="about-text">
          <p>
            Nadat de drukke horeca waar ik jarenlang heb gewerkt door corona noodgedwongen moest sluiten wist
            ik dat ik hier geen toekomst meer in zou kunnen vinden. Al enige tijd sprak ik met regelmaat een
            vriend van mij die werkzaam is als programmeur en toen begon het steeds meer te kriebelen. Ik ben
            altijd al geinteresseerd geweest in de IT en heb het altijd al leuk gevonden om met computers in
            de weer te zijn.
          </p>
          <p>
            Zodoende ben ik opzoek gegaan en na enige twijfel heb ik toch een duik in het diepe genomen en mij
            ingeschreven voor de opleiding Front-end Development van Winc Academy. Middels deze opleiding hoop
            ik na het voltooien van de cursus een bijbehorende baan te vinden.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
