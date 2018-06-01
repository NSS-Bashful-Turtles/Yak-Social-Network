import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Using bloomer tags to import bulma styling
import { Navbar, NavbarItem, Input, Control, Button, NavbarBurger, NavbarBrand, NavbarMenu } from "bloomer";
import 'bulma/css/bulma.css'
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props)
        // Storing session storage as an object in state named currentUser
        this.state = {
            currentUser: sessionStorage.getItem('userId'),
            isActive: false,
            firstName: ""
        }
    }

// Making a fetch request against sessionStorage to find relevant user and storing first name in state
    componentDidMount() {
        fetch(`http://127.0.0.1:8088/users/${this.state.currentUser}`)
        .then(r => r.json())
        .then(response => {
            this.setState({
                firstName: response.name.first
            })
        })
    }

    // event handler for clicking nav drop down burger
    // sets isActive property in state to the opposite of what it currently is
    onClickNav = function () {
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
                        <Input id="input__search" type="text" placeholder="Search"></Input>
                        <Button isColor="info" isOutlined>S</Button>
                    </Control>
                    <NavbarItem href="/">Notifications</NavbarItem>
                    <NavbarItem href={"/profile/" + this.state.currentUser}>{this.state.firstName}</NavbarItem>
                    <NavbarItem href={"/"}>Logout</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}