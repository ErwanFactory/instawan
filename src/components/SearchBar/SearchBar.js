import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchbar">
                <form className="d-flex align-items-center">
                    <input name="search" className="search" placeholder="Search..." />
                    <button type="submit" className="btn">
                        <i className="material-icons">
                            search
                        </i>
                    </button>
                </form>
            </div>);
    }
}

export default SearchBar;
