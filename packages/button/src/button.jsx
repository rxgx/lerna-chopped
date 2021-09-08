import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export default function Button (props) {
  return (
    <button className={styles.root} onClick={props.onClick} type='button'>
      <span>{props.children}</span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}
