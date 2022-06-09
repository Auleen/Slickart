import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer(props) {
  const navigate = useNavigate();
  let total = props.total;
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

      <Link className="pay" to="/checkout" state={"100"}>
        Checkout
      </Link>
    </div>
  );
}

export default Footer;
