import React from 'react';
import  { Link } from 'react-router-dom'
import ShopComponent from './ShopPage/ShopComponent'
import './Header.css';

const Header = () => {

	return (
    <div className="headerContainer" >
      <Link className="headerIcon" to='/'> ✻</Link>
      <div className= "options">
        <Link className="option" to='/shop'> SHOP </Link>
        <Link className="option" to='/shop'> CONTACT </Link>
      </div>
    </div>
	)
}
export default Header;
