import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  border-radius: 0.25em;
  cursor: pointer;
  padding: 0.75em 2em;
  background-color: darkgoldenrod;
  color: white;
  align-items: center;
  display: inline-flex;
`

export default function Button (props) {
  return (
    <ButtonStyled
      className={props.className}
      onClick={props.onClick}
      type='button'
    >
      <span>{props.children}</span>
    </ButtonStyled>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

Button.defaultProps = {
  className: ''
}
