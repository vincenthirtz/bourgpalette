import { createElement, appendChild, createFragment } from "./utils";
import "regenerator-runtime/runtime";
import Controls from "./controls.jsx";

/** @jsx createElement */
/*** @jsxFrag createFragment */

const App = (props) => {
  return (
    <div id="toto">
      <div class="container">
        <div id="house" class="house">
          <div class="house-base">
            <div class="house-base-detail"></div>
            <div class="house-door-wrapper">
              <div class="house-door">
                <div class="house-door-window"></div>
                <div class="house-door-detail"></div>
              </div>
            </div>
            <div class="house-window-wrapper">
              <div class="house-window house-window-left"></div>
              <div class="house-window house-window-right"></div>
            </div>
          </div>
          <div class="house-sandwich"></div>
          <div class="house-upper">
            <div class="house-upper-detail"></div>
            <div class="house-upper-shadow"></div>
            <div class="house-window"></div>
            <div class="house-window-wrapper">
              <div class="house-window house-window-left"></div>
              <div class="house-window house-window-right"></div>
            </div>
          </div>
          <div class="house-roof">
            <div class="house-roof-side house-roof-side-left"></div>
            <div class="house-roof-side house-roof-side-right"></div>
            <div class="house-roof-detail"></div>
          </div>
        </div>
      </div>
      <Controls />
    </div>
  );
};

document.getElementById("app").appendChild(<App name="foo" />);
