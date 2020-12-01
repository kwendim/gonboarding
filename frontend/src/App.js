import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Keycloak from 'keycloak-js';

const apiUrl = "http://backend-service:8080";

class App extends Component {
  state = {
    users: [], keycloak: null, authenticated: false
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    console.log("Load users called");
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    console.log(this.state)
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
    console.log("componenet did mount");
    console.log(this.state)
    // this.loadUsers();
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) {
        return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => this.createUser()}>Create User</button>
            <p>Users list:</p>
            <ul>
              {this.state.users.map(user => (
                <li key={user._id}>id: {user._id}</li>
              ))}
            </ul>
          </header>
        </div>);
      } 
      else {
        return (<div>unable to authenticate!</div>)
      }
    }
    return (<div>Initializing keycloak</div>);
  }
}

export default App;
