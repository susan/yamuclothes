import React from 'react';
import  { Link } from 'react-router-dom'
import ShopComponent from './ShopPage/ShopComponent'
import './Header.css';
import { auth } from '../firebase/firebase.utils';

import { connect } from 'react-redux';


import CartIcon from '../Components/cart-icon/cartIcon'
import CartDropdown from '../Components/cartDropdown/cartDropdown'

const Header = ({currentUser, hidden }) => {

	return (
    <div className="header-container" >
      <Link className="header-icon" to='/'> ✻</Link>
      <div className= "options">
        <Link className="option" to='/shop'> SHOP </Link>
        <Link className="option" to='/shop'> CONTACT </Link>
        { currentUser
           ?
           (<div className="option" onClick= {()=> auth.signOut() } >
            SIGN OUT
            </div>)
           :
        (<Link className="option" to='/login'> SIGN IN </Link>)
      }
      <CartIcon />
      </div>
      { !hidden
         ?
         <CartDropdown />
         :
         null
      }
    </div>
	);
}


const mapStateToProps = (state) => (
  {
   currentUser: state.user.currentUser,
   hidden: state.cart.hidden
  }
)

export default connect(mapStateToProps)(Header);
