import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const Header = ({startLogout}) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard"><h1>BoilerPlate</h1></Link>
          <button className="genButton button__link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {startLogout:() => dispatch(startLogout())};
}
export default connect(undefined, mapDispatchToProps)(Header);
//<NavLink to="/create" activeClassName='is-active'>Create an expense</NavLink>