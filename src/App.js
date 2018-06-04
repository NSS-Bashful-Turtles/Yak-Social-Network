import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginRegistration/loginRegistrationPage'
import Dashboard from './dashboard/Dashboard'

class App extends Component {
  state = {
    currentView: "",
    searchTerms: "",
    activeUser: ""
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

  showView = () => {
    // debugger
    if (sessionStorage.getItem("userId") === null) {
        return <LoginPage setView={this.setView} setActiveUser={this.setActiveUser} />
    } else {
        switch (this.state.currentView) {
            // case "logout":
            //     return <LoginPage showView={this.showView} setActiveUser={this.setActiveUser} />
            // case "results":
            //     return <SearchResults terms={this.state.searchTerms} />
            case "home":
            default:
                return <Dashboard activeUser={this.state.activeUser} />
        }
    }
}

  render() {
    return(
      <div>
        {this.showView()}
      </div>
    )
  }
}

export default App;
