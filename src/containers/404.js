import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/css/404.css";

export default function FoF() {
  let navigate = useNavigate();

  return (
    <div className="fof">
      <div className="fof-content">
        <h1 className="fof-text">404</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          class="btn fof-btn"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
