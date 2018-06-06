import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginRegistration/loginRegistrationPage'
import Dashboard from './dashboard/Dashboard'
import NavBar from './nav/NavBar'
import SearchResults from './search/Search'
import Profile from './profile/ProfileView'

class App extends Component {
  state = {
    currentView: "",
    searchValue: "",
    searchType: "all",
    activeUser: "",
    searchDisplay: "All"
  }

  setActiveUser = function (val) {
    // if (val) {
    //   localStorage.setItem("userId", val)
    // } else {
    //   localStorage.removeItem("userId")
    // }
    this.setState({
      activeUser: val
    })
  }.bind(this)

  setView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
        view = e.target.id.split("__")[1]

        // View switch manually triggered by passing in string
    } else {
        view = e
    }

    // If user clicked logout in nav, empty local storage and update activeUser state
    if (view === "logout") {
        this.setActiveUser(null)
    }

    // Update state to correct view will be rendered
    this.setState({
        currentView: view
    })

}.bind(this)

componentDidMount() {
  this.setState({
    activeUser: sessionStorage.getItem("userId")
  })
}

  showView = () => {

    if (sessionStorage.getItem("userId") === null) {
        return <LoginPage setView={this.setView} setActiveUser={this.setActiveUser} />
    } else {
        switch (this.state.currentView) {
            case "logout":
                return <LoginPage showView={this.showView} setActiveUser={this.setActiveUser} />
            case "search":
                return <SearchResults searchValue={this.state.searchValue} searchType={this.state.searchType} />
            case "profile":
                return <Profile userId={this.state.activeUser}/>
            case "home":
            default:
                return <Dashboard activeUser={this.state.activeUser} />
        }
    }
}

  setSearchType = function (e) {
    this.setState({
      searchType: e.target.id,
      searchDisplay: e.target.textContent
    })
  }.bind(this)

  setSearchValue = function (e) {
    this.setState({
      searchValue: e.target.value
    })
  }.bind(this)

  render() {
    return(
      <div>
        <NavBar setView={this.setView} setSearchType={this.setSearchType} setSearchValue={this.setSearchValue} searchDisplay={this.state.searchDisplay}/>
        {this.showView()}
      </div>
    )
  }
}

export default App;
