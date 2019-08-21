import React from 'react'
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionsList from '../ShopPage/CollectionsList'

const HatsPage = () => {

  return (
    <CollectionsList section={SHOP_DATA[0]} />
  )
}

export default HatsPage;
