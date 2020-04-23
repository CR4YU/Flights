import React from 'react';
import { withRouter } from 'react-router'
import './Header.css';
import logo from './plane.svg';
import title from './title.svg';


class Header extends React.Component {

    state = {}

    constructor(props) {
        super(props);
    }

    goToHomePage = () => {
        this.props.history.push('/');
    }

    render = () =>
        <header className="Header">
            <div className="Header-title" onClick={this.goToHomePage}>
                <img src={logo} className="Logo" alt="logo" />
                <img src={title} className="Title" alt="title" />
            </div>
            <div className="Header-functions">
                <a href="/register">Register</a>
                <div className="Header-function-separator"/>
                <a href="/login">Login</a>
            </div>
        </header>

}

export default withRouter(Header);
