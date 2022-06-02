import React from "react";
import "./Footer.css";
function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <button
        className="reset"
        onClick={() => {
          props.reset();
        }}
      >
        Reset
      </button>
      <div className="total">
        <strong>Total Bill:</strong> ${props.total}
      </div>
      <button className="pay">Pay Now</button>
    </div>
  );
}

export default Footer;
