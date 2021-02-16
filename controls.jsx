import { createElement, appendChild, createFragment } from "./utils";
import "regenerator-runtime/runtime";

/** @jsx createElement */
/*** @jsxFrag createFragment */

const Controls = (props) => {
  function updateColor(color) {
    const house = document.getElementById("house");
    house.className = "house";
    house.classList.add(color);

    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }

    const button = document.querySelector(`.${color}`);
    button.classList.add("active");
  }

  return (
    <div class="color-controls">
      <p>Select a colour</p>
      <div class="color-controls-button-container">
        <button
          onClick={() => updateColor("pallet")}
          class="color-controls-button pallet active"
          data-color="pallet"
        ></button>
        <button
          onClick={() => updateColor("viridian")}
          class="color-controls-button viridian"
          data-color="viridian"
        ></button>
        <button
          onClick={() => updateColor("pewter")}
          class="color-controls-button pewter"
          data-color="pewter"
        ></button>
        <button
          onClick={() => updateColor("cerulean")}
          class="color-controls-button cerulean"
          data-color="cerulean"
        ></button>
        <button
          onClick={() => updateColor("vermillion")}
          class="color-controls-button vermillion"
          data-color="vermillion"
        ></button>
        <button
          onClick={() => updateColor("lavender")}
          class="color-controls-button lavender"
          data-color="lavender"
        ></button>
        <button
          onClick={() => updateColor("celadon")}
          class="color-controls-button celadon"
          data-color="celadon"
        ></button>
        <button
          onClick={() => updateColor("saffron")}
          class="color-controls-button saffron"
          data-color="saffron"
        ></button>
        <button
          onClick={() => updateColor("fuschia")}
          class="color-controls-button fuschia"
          data-color="fuschia"
        ></button>
        <button
          onClick={() => updateColor("cinnabar")}
          class="color-controls-button cinnabar"
          data-color="cinnabar"
        ></button>
      </div>
    </div>
  );
};

export default Controls;
