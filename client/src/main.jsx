import React, { useEffect, useState } from 'react'
import Basket from './basket'
import Layout from './layout'

export default function HomePage () {
  const [ingredients, setIngredients] = useState()

console.log(process.env.CODESPACES, process.env.CODESPACE_NAME)

  const uri = process.env.CODESPACES
    ? `${process.env.CODESPACE_NAME}-3000.githubpreview.dev`
    : 'http://localhost:3001'

  useEffect(() => {
    window
      .fetch(uri)
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
