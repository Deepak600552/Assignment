import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

export class NavBar extends Component{
     render(){
         return(
             <Navbar bg="dark" expand="lg">
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
             </Navbar>
         )
     }
}