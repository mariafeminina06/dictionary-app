import React from "react";

export default function Phonetics({ phonetic }) {
  return (
    <div className="Phonetics">
      <a href={phonetic.audio} target="_blank">
        {phonetic.text}
      </a>
    </div>
  );
}
