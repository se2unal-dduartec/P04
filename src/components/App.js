import React, { Component } from 'react';
import logo from '../resources/pl.png';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br/>
          <Link className="link" to='/teamList'>Team List</Link>
        </header>
      </div>
    );
  }
}

export default App;
