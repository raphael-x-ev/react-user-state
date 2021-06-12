import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Button1 = (props) => {
  const [count, setCount] = useState("Inactive");
  const [btnClass, setBtnClass] = useState("outline-secondary");

  function handleClick() {
    count === props.status
      ? [setCount("Inactive"), setBtnClass("outline-secondary")]
      : [setCount("Active"), setBtnClass("success")];
  }

  return (
    <Button
      className="tableBtn"
      variant={btnClass}
      onClick={handleClick}
      size="lg"
      style={{ width: "100px" }}
    >
      {count}
    </Button>
  );
};

Button1.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Button1;
