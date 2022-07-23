import React from "react";
import { useState } from "react";
export default function Product(props) {
  console.log(props);
  const [qnt, setQnt] = useState(props.x.quantity);
  const increment = () => {
    setQnt(qnt + 1);
    props.setBill(props.x.price);
  };
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.x.URL}
              className="img-fluid rounded-start"
              alt={props.x.name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <pre>
                <h5 className="card-title">
                  {props.x.name}{" "}
                  <span className="badge bg-secondary">₹{props.x.price}</span>
                </h5>
              </pre>

              <p className="card-text">{props.x.description}</p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-danger">
                  -
                </button>
                <button type="button" className="btn btn-warning">
                  {qnt}
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    increment();
                  }}
                >
                  +
                </button>
              </div>
              <div className="col-6">
                <strong>Total:</strong>
                {qnt * props.x.price}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
