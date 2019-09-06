import React from 'react';
import logo from '../../assets/images/logo-erwan.svg';
import SearchBar from '../SearchBar/SearchBar';

class TopBar extends React.Component {

    render() {
        return (
        <div className="topbar">
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
            <SearchBar />
        </div>);
    }
}

export default TopBar;
 