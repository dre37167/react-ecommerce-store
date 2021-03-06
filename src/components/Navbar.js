import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button'





export default class Navbar extends Component{
  render(){
    return(
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">

      <Link to="/">
      <img src={logo} alt="store"
      className="Navbar-brand" />
      </Link>
        <ul className="Navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/LoginPage" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav
 `background: var(--mainBlue);
  .nav-link{
  color:var(--mainWhite) !important;
  font-size:2.3rem;
  text-transform: capitalize;
}`
