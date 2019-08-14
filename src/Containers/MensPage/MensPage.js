import React from 'react'
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionsList from '../ShopPage/CollectionsList'

const MensPage = () => {
  return (
    <CollectionsList section={SHOP_DATA[4]} />
  )
}

export default MensPage;
