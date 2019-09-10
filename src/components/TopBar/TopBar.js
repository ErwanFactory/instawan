import React from 'react';
import logo from '../../assets/images/logo-erwan.svg';
import SearchBar from '../SearchBar/SearchBar';
import './TopBar.css';

class TopBar extends React.Component {

    render() {

        return (
        <div className="topbar">
            <a href="/">
                <img src={logo} alt="Logo" width="50" height="50" />
            </a>
            <SearchBar onFiltersAddRequest={this.props.onFiltersAddRequest}/>
            <div></div>
        </div>);
    }
}

export default TopBar;
 