import React from "react";
import "./Definition.css";

export default function Definition({ definition }) {
  console.log({ definition });
  return (
    <div className="Definition">
      <h3>{definition.partOfSpeech}</h3>
      {definition.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              <br />
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
