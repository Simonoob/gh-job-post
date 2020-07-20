import React from "react";

export default function Job({ job }) {
  return (
    <div className="card darken-3">
      <div className="card-title">
        {job.title} -{" "}
        <span style={{ fontWeight: "lighter" }} className="lighten-3">
          {job.company}
        </span>
      </div>
      <span className="white-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
        accusamus neque expedita ducimus cumque, voluptatum quo praesentium quas
        ad et, earum eveniet provident quis eum enim natus doloremque sit
        laudantium?
      </span>
      <div className="card-action center orange orange">
        <button className="white-text btn">miao</button>
        <button className="white-text">miao</button>
      </div>
      <button className="btn-floating right btn-large black">
        <i className="material-icons">home</i>
      </button>
    </div>
  );
}
