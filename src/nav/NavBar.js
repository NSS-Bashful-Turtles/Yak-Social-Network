import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Using bloomer tags to import bulma styling
import { Navbar, NavbarItem, Input, Control, Button, NavbarBurger, NavbarBrand, NavbarMenu } from "bloomer";
import 'bulma/css/bulma.css'

class NavBar extends Component {

    constructor(props) {
        super(props)
        // Storing session storage as an object in state named currentUser
        this.state = {
            currentUser: sessionStorage.getItem('userId'),
            isActive: false
        }
    }

    // event handler for clicking nav drop down burger
    // sets isActive property in state to the opposite of what it currently is
    onClickNav = function() {
        this.setState({
            isActive: (!this.state.isActive)
        })
    }.bind(this)

    // Line 24: Session user is grabbed and profile page is loaded upon profile click
    render() {
        return (
            <Navbar>
                <NavbarBrand>
                    <NavbarItem>Yak</NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                <NavbarItem href={"/home/" + this.state.currentUser}>Home</NavbarItem>
                <Control>
                    <Input type="text" placeholder="Search"></Input>
                </Control>
                <Button isColor="info" isOutlined>S</Button>
                    <NavbarItem href="/">Notifications</NavbarItem>
                    <NavbarItem href={"/profile/" + this.state.currentUser}>Jacob</NavbarItem>
                    <NavbarItem href={"/"}>Logout</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}