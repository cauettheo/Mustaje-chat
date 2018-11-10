import React, { Component } from 'react';
import Profile from './components/profile.js'
import './css/foundation.css';
import './css/app.css';

class App extends Component {
  render() {
    return (
        <header>
            <ul className="menu align-center">
                <li><a href='#'>Messages</a></li>
                <li><a href="/components/profile">Profil</a></li>
            </ul>
        </header>
        <Profile />
    );
  }
}

export default App;
