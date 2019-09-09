import React from 'react';
import logo from '../../assets/images/logo-erwan.svg';
import SearchBar from '../SearchBar/SearchBar';

class TopBar extends React.Component {

    render() {

        return (
        <div className="fixed-top bg-white w-100 d-flex align-items-center justify-content-around">
            <a href="/">
                <img src={logo} alt="Logo" width="50" height="50" />
            </a>
            <SearchBar onFiltersAddRequest={this.props.onFiltersAddRequest}/>
            <div></div>
        </div>);
    }
}

export default TopBar;
 