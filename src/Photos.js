import React from "react";
import "./Photos.css";

export default function Photos(props, alt) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          <h3>Related Photos</h3>
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={props.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
