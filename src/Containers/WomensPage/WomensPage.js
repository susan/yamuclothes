import React from 'react'
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionsList from '../ShopPage/CollectionsList'


const WomensPage = () => {
  return (
    <CollectionsList section={SHOP_DATA[3]} />
  )
}

export default WomensPage;
