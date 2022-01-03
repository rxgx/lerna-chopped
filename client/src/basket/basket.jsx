import ButtonESM from '@chopped/button-esm'
import React, { useState } from 'react'
import styles from './basket.module.css'
import createBasket from './createBasket'

export default function Basket (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [basket, setBasket] = useState([])

  function handleClickEvent () {
    const basket = createBasket(props.ingredients)
    if (!isOpen) setIsOpen(true)
    setBasket(basket)
  }

  const action = isOpen ? 'Try Again' : 'Open Basket'

  return (
    <div className={styles.container}>
      <ul>
        {basket.map(item => (
          <li key={item.label} className={styles.ingredient}>
            {item.label}
          </li>
        ))}
      </ul>
      <p className={styles.content}>
        <ButtonESM onClick={handleClickEvent}>
          <span>{action}</span>
        </ButtonESM>
      </p>
    </div>
  )
}
