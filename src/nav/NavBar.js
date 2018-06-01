import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Using bloomer tags to import bulma styling
import { Navbar, NavbarItem, Input, Control, Button, NavbarBurger, NavbarBrand, NavbarMenu, NavbarLink, NavbarDropdown } from "bloomer";
import 'bulma/css/bulma.css'
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props)
        // Storing session storage as an object in state named currentUser
        this.state = {
            currentUser: sessionStorage.getItem('userId'),
            isActive: false,
            firstName: "",
            searchValue: "",
            searchType: "Search for"
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
        document.querySelector("#input__search").value = ""
    }.bind(this)

    //on click of search button
    onClickSearch = function () {
        //fire function to close navbar
        this.onClickNav()

        /* 
            add code here 
            to fire search functionality
        */
    }.bind(this)

    handleSearchKeyPress = function (event) {
        this.setState({
            searchValue: event.target.value,
        })
    }.bind(this)

    handleSearchTypeChange = function (event) {
        this.setState({
            searchType: event.target.textContent
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
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem href={"/home/" + this.state.currentUser} onClick={this.onClickNav}>Home</NavbarItem>
                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink>{this.state.searchType}</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem onClick={this.handleSearchTypeChange}>users</NavbarItem>
                            <NavbarItem onClick={this.handleSearchTypeChange}>posts</NavbarItem>
                            <NavbarItem onClick={this.handleSearchTypeChange}>events</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                    <Input id="input__search" type="text" placeholder="Search" onChange={this.handleSearchKeyPress}></Input>
                    <NavbarItem href={"/search/" + this.state.searchType + "/" + this.state.searchValue}><Button isColor="info" onClick={this.onClickSearch} isOutlined><i className="material-icons">search</i></Button></NavbarItem>
                    <NavbarItem href="/" onClick={this.onClickNav}>Notifications</NavbarItem>
                    <NavbarItem href={"/profile/" + this.state.currentUser} onClick={this.onClickNav}>{this.state.firstName}</NavbarItem>
                    <NavbarItem href={"/"} onClick={this.onClickNav}>Logout</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}