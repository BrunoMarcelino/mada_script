'use strict'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import logo from './logo.svg';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import Home from './components/home';
import Contact from './components/contact';
import Apropos from './components/apropos';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav } from "mdbreact";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark  teal darken-2">
          <a class="navbar-brand" href="#">Mada'Script</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
               <Link to="/" class="nav-link">Acceuil</Link>
              </li>
              <li class="nav-item">
                <Link to="/Apropos" class="nav-link">Apropos</Link>
              </li>
              <li class="nav-item">
                <Link to="/Contact" class="nav-link">Contact</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Dropdown
                </a>
                <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light">
                  <i class="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-user"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-default"
                  aria-labelledby="navbarDropdownMenuLink-333">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
 
          <Route exact path="/" component={Home} />
          <Route path="/Apropos" component={Apropos} />
          <Route path="/Contact" component={Contact} />
        </Router>
     </div>
    );
  }
}

export default App;
