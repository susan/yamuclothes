import React from 'react';
import { MenuItem } from '../Components/MenuItem/MenuItem'


const MenuList = () => {

	const choices = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS']

  return (
  <div className= 'menuItem'>
    {
	    choices.map((choice, i) => {
	      return <MenuItem key={i} className= {`content${i}`} choice={choice} />
	    })
    }
  </div>
  );
}

export default MenuList;
