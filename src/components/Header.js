import PropTypes from 'prop-types'
import React from "react";

const Header = ({title}) => {
  return(
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  )
  
}

Header.defaultProps = {
  title: 'User Status',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header