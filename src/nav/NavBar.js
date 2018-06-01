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

    componentDidMount() {
        fetch(`http://127.0.0.1:8088/users/${this.props.match.params.userId}`)
        .then(r => r.json())
        .then(response => {
            console.log(response)
            // this.setState({
            //     firstName: response
            // })
        })
    }

// Line 24: Session user is grabbed and profile page is loaded upon profile click
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