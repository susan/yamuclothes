import React from 'react'
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionsList from '../ShopPage/CollectionsList'

const JacketsPage = () => {
  return (
    <CollectionsList section={SHOP_DATA[2]} />
  )
}


export default JacketsPage;
