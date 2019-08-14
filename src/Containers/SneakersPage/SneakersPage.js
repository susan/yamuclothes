import React from 'react'
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionsList from '../ShopPage/CollectionsList'

const SneakersPage = () => {
  return (
    <CollectionsList section={SHOP_DATA[1]} />
  )
}

export default SneakersPage;
