

import { createSelector } from 'reselect'

//this gives me the entire state obj in shopData
const selectData = state => state.shopData

export const selectShopData =
 createSelector( [selectData],
   //take that shopData object and return only the collections property
   (shopData) => shopData.collections
 	)

// export const selectCollectionsForPreview = createSelector(
//   [selectShopData],
//   collections =>
//     collections ? Object.keys(collections).map(key => collections[key]) : []
// );
