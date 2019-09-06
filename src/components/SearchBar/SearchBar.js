import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchbar">
                <form>
                    <input name="search" placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
            </div>);
    }
}

export default SearchBar;
