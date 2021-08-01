import React, { useEffect, useState } from 'react'
import Basket from './Basket'
import Layout from './Layout'

export default function HomePage () {
  const [ingredients, setIngredients] = useState()

  useEffect(() => {
    window
      .fetch('http://localhost:3001')
      .then(response => response.json())
      .then(data => setIngredients(data.ingredients))
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <Basket ingredients={ingredients} />
    </Layout>
  )
}
