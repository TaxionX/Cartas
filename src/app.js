/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let simbolos = ["♦", "♥", "♠", "♣"];
  let colores = ["red", "black"];
  let cartas = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Rey",
    "Reina",
    "Jota",
    "As"
  ];

  let simbolosAleatorios = Math.floor(Math.random() * simbolos.length);
  let coloresAleatorios = Math.floor(Math.random() * colores.length);
  let cartasAleatorios = Math.floor(Math.random() * cartas.length);

  let textocartas = document.getElementById("cartas");
  textocartas.innerText = cartas[cartasAleatorios];

  let elementos = document.querySelectorAll(".simbolos");

  elementos.forEach(element => {
    element.style.color = colores[coloresAleatorios];
    element.innerText = simbolos[simbolosAleatorios];
  });
};
