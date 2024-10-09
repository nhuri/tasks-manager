import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      variant="light"
      animation="border"
      role="status"
      style={{
        width: "70px",
        height: "70px",
        display: "block",
        margin: "auto",
      }}
    />
  );
};

export default Loader;
