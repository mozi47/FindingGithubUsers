import React, { Fragment } from "react";
import Spin from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Spin}
        alt="loading... "
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
