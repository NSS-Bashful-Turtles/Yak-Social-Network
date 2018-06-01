import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Using bloomer tags to import bulma styling
import {Navbar, NavbarItem, Input, Control, Button} from "bloomer";
import 'bulma/css/bulma.css'

class NavBar extends Component {
// Storing session storage as an object in state named currentUser
    state = {
        currentUser: sessionStorage.getItem('userId'),
        firstName: ""
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

// Line 24: Session user is grabbed and profile page is loaded upon profile click
    render() {
        return (
        <Navbar>
            <NavbarItem href={"/home/" + this.state.currentUser}>Home</NavbarItem>
            <Control>
                <Input type="text" placeholder="Search"></Input>
            </Control>
                <Button isColor="info" isOutlined>S</Button>
            <NavbarItem href="/">Notifications</NavbarItem>
            <NavbarItem href={"/profile/" + this.state.currentUser}>{this.state.firstName}</NavbarItem>
            <NavbarItem href={"/"}>Logout</NavbarItem>
        </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}