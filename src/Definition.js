import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition({ definition }) {
  console.log({ definition });
  return (
    <div className="Definition">
      <h2>{definition.partOfSpeech}</h2>
      {definition.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitionSect">
            <p>
              <strong> Definition:</strong>
              <br />
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
