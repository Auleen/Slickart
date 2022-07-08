import React, { Component } from "react";
import buzz from "../images/buzz.jpg";
import slash from "../images/slash.jpg";
import nirvana from "../images/nirvana.jfif";
import bottle from "../images/Klean-Kanteen-Recycled-Gear.jpg";
import blanket from "../images/Gear-Seljak-Earth-blanket-1-SOURCE-Seljak.jpg";
export default function Product(props) {
  console.log(props);
  const imageArr = [{ slash }, { buzz }, { nirvana }, { blanket }, { bottle }];
  console.log(typeof imageArr[0]);
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Object.values(imageArr[props.index])}
              className="img-fluid rounded-start"
              alt={props.x.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <pre>
                <h5 className="card-title">
                  {props.x.name}{" "}
                  <span className="badge bg-secondary">${props.x.price}</span>
                </h5>
              </pre>

              <p className="card-text">{props.x.describe}</p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    props.decrementQ(props.index);
                  }}
                >
                  -
                </button>
                <button type="button" className="btn btn-warning">
                  {props.x.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    props.incrementQ(props.index);
                  }}
                >
                  +
                </button>
              </div>
              <div className="col-6">
                <strong>Total:</strong>
                {props.x.quantity * props.x.price}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
