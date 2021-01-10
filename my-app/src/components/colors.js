import React from "react";
import { Link } from "react-router-dom";

const Colors = (props) => {

  return (
      <div>
        <h4>Please Select a color </h4>
      <ul>
        {props.Colors.map((color, index) => {
          return (
            <li key={index}>
              <Link to={`/colors/${color}`}>{color}</Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
};
export default Colors;
