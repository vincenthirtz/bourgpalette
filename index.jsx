import { createElement, appendChild, createFragment } from "./utils";
import "regenerator-runtime/runtime";
import Controls from "./controls.jsx";
import House from "./house.jsx";

/** @jsx createElement */
/*** @jsxFrag createFragment */

const App = (props) => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-5">
        <House />
        <House />

        <House />
      </div>
      <Controls />
    </div>
  );
};

document.getElementById("app").appendChild(<App name="foo" />);
