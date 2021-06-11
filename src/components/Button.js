import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'react-bootstrap';

const Button1 = ({status}) => {
  return (
    <Button variant="success">{status}</Button>

  )
}

Button1.defaultProps = {
  status: 'Inactive',
}

Button1.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Button1