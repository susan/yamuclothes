import React from 'react';
import  { Link } from 'react-router-dom'
import ShopComponent from './ShopPage/ShopComponent'

const Header = () => {

	return (
    <div>
    <p><Link to='/shop'> Shop </Link></p>
   <p> <Link to='/'> Home </Link></p>
    </div>
	)
}
export default Header;
