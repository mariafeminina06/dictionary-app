import React from "react";
import "./Data.css";
import Definition from "./Definition";

export default function Data({ data }) {
  if ({ data }) {
    console.log({ data });
    return (
      <div className="Data">
        <h1>{data.word}</h1>
        {data.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition definition={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
