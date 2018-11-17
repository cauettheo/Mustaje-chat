import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Menu, MenuItem} from "react-foundation";
import {MenuAlignments as Alignments} from "react-foundation/src/enums";
import Home from "./components/Home";

const App = () => (
    <Router>
        <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/profile" component={Profile} />

        </div>
    </Router>
);

const Messages = () => <h2>Messages</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Profile = ({ match }) => (
    <div>
        <h2>Profile</h2>

        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
            <li>
                <Link to={`${match.url}/test`} component={Test} onClick={console.log(match.path)}>Test</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);
const Test = () => (
    <h1>Bonsoir</h1>
);
const Header = () => (
    <div className="menu-active-state-example">
        <Menu alignment={Alignments.CENTER}>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/messages">Messages</Link></MenuItem>
            <MenuItem><Link to="/profile">Profile</Link></MenuItem>
        </Menu>
    </div>
);

export default App;