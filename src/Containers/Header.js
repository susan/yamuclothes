import React from 'react';
import  { Link } from 'react-router-dom'
import ShopComponent from './ShopPage/ShopComponent'

const Header = () => {

	return (
    <div>
    <Link to='/shop'> Shop </Link>
    </div>
	)
}
export default Header;
