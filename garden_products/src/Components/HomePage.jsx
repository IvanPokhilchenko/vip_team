import React from 'react'
import Discount from './Home/Discount'
import CategoriesList from './Home/CategoriesList'
import RandomProducts from './Home/RandomProducts'
import DiscountForm from './Home/DiscountForm'


function HomePage() {

  return (
    <>
    <Discount />
    <CategoriesList />
    <DiscountForm />
    <RandomProducts />
    </>
  )
}

export default HomePage