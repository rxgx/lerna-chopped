import React, { useEffect, useState } from 'react'
// import client from '../clients/Firebase'
import Basket from './Basket'
import Layout from './Layout'

export default function HomePage () {
  const [ingredients, setIngredients] = useState()

  // useEffect(() => {
  //   client.ref('ingredients').once('value', snapshot => {
  //     const values = snapshot.val()
  //     setIngredients(values)
  //   })
  // }, [])

  return (
    <Layout>
      <Basket ingredients={ingredients} />
    </Layout>
  )
}
