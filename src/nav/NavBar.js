import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Using bloomer tags to import bulma styling
import { Navbar, NavbarItem, Input, Control, Button, NavbarBurger, NavbarBrand, NavbarMenu, NavbarLink, NavbarDropdown } from "bloomer";
import 'bulma/css/bulma.min.css'
import './NavBar.css'

class NavBar extends Component {

        // Storing session storage as an object in state named currentUser
        state = {
            isActive: false,
            firstName: "",
            image: "",
            searchValue: "",
            searchType: "Search for"
        }

    // Making a fetch request against sessionStorage to find relevant user and storing first name in state
    componentDidMount() {
        const currentUser = sessionStorage.getItem('userId')
        fetch(`http://127.0.0.1:8088/users/${currentUser}`)
            .then(r => r.json())
            .then(response => {
                this.setState({
                    firstName: response.name.first,
                    image: response.image
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

    render() {
        return (
            <Navbar>
                <NavbarBrand>
                    <NavbarItem>Yak</NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem id="nav__home" href={"/home/" + this.state.currentUser} onClick={this.onClickNav}>Home</NavbarItem>
                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink>{this.state.searchType}</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem className="nav__pointer" onClick={this.handleSearchTypeChange}>People</NavbarItem>
                            <NavbarItem className="nav__pointer" onClick={this.handleSearchTypeChange}>Posts</NavbarItem>
                            <NavbarItem className="nav__pointer" onClick={this.handleSearchTypeChange}>Events</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                    <Input id="input__search" type="text" placeholder="Search" onChange={this.handleSearchKeyPress}></Input>
                    <NavbarItem id="nav__search" href={"/search/" + this.state.searchType + "/" + this.state.searchValue}><Button isColor="info" onClick={this.onClickSearch} isOutlined><i className="material-icons">search</i></Button></NavbarItem>
                    <NavbarItem id="nav__notifications" href="/" onClick={this.onClickNav}>Notifications</NavbarItem>
                    <NavbarItem id="nav__profile" href={"/profile/" + this.state.currentUser} onClick={this.onClickNav}><img class="profile__image" src={this.state.image}></img>{this.state.firstName}</NavbarItem>
                    <NavbarItem id="nav__logout" href={"/"} onClick={this.onClickNav}>Logout</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default NavBar

// {this.state.currentUser.name.first}