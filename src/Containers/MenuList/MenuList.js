import React, { Component } from 'react';
import MenuItem  from '../../Components/MenuItem/MenuItem';


class MenuList extends Component  {

	state = {
    sections: [
      {
        title: 'HATS',
        imageURL: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        id: 1
      },
      {
        title: 'JACKETS',
        imageURL: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        id: 2
     },
     {
        title: 'SNEAKERS',
        imageURL: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        id: 3
     },
    {
        title: 'WOMENS',
        imageURL: 'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        id: 4
     },
     {
        title: 'MENS',
        imageURL: 'https://images.pexels.com/photos/404171/pexels-photo-404171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        id: 5
     }
   ]
  }
  render() {
    return (
    <div className= 'menuItem'>
      {
  	    this.state.sections.map( choice  => {
  	      return <MenuItem key={choice.id} className= {`content${choice.id}`} choice={choice} />
  	    })
      }
    </div>
    );
  }
}

export default MenuList;
