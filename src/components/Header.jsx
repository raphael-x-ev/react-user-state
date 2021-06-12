import PropTypes from "prop-types";
import React from "react";
import { Badge } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h6>
          {title} <Badge variant="secondary">BETA</Badge>
        </h6>
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "User Status",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
