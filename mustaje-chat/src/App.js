import React, { Component } from 'react';
import Foundation, {Callout, Link, Menu, MenuItem} from 'react-foundation';
import {BadgeColors as Colors, ButtonGroupSizes as Sizes, FloatTypes as Alignment} from "react-foundation/src/enums";

class App extends Component {
  render() {
    return (
        <div>
            <Menu alignment={Alignment.CENTER}>
                <MenuItem isActive><a>Home</a></MenuItem>
                <MenuItem><a>Messages</a></MenuItem>
                <MenuItem><a>Profile</a></MenuItem>
            </Menu>
        </div>
    );
  }
}

export default App;
