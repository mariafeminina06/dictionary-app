import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics";
import "./Data.css";

export default function Data({ data }) {
  if ({ data }) {
    console.log({ data });
    return (
      <div className="Data">
        <h1>{data.word}</h1>
        {data.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
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
