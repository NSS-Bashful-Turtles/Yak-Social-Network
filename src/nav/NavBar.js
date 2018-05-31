import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import {Navbar, NavbarItem, Input, Control, Button} from "bloomer";
import 'bulma/css/bulma.css'

class NavBar extends Component {

    state = {
        currentUser: sessionStorage.getItem('userId')
    }

    render() {
        return (
        <Navbar>
            <NavbarItem href="/">Home</NavbarItem>
            <Control>
                <Input type="text" placeholder="Search"></Input>
            </Control>
                <Button isColor="info" isOutlined>S</Button>
            <NavbarItem href="/">Notifications</NavbarItem>
            <NavbarItem href={"/profile/" + this.state.currentUser}>Jacob</NavbarItem>
            <NavbarItem href={"/"}>Logout</NavbarItem>
        </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}