import React, { Component } from 'react';
import './../css/foundation.css';
import './../css/app.css';
export default Profile;

class Profile extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="columns small-2 large-4">1</div>
                <div className="columns small-4 large-4">2</div>
                <div className="columns small-6 large-4">3</div>
            </div>
        );
    }

}