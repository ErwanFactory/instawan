import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFiltersAddRequest(this.state.filterValue.trim().split(' '));
        this.setState({ filterValue: '' });
    }

    handleChange(e) {
        this.setState({ filterValue: e.target.value });
    }

    render() {
        return (
            <div className="searchbar">
                <form className="d-flex align-items-center" onSubmit={this.handleSubmit}>
                    <input name="search" className="search-bar" placeholder="Type your tags here (montreal, urban)..."
                        value={this.state.filterValue} onChange={this.handleChange}
                        pattern="^(\w+( )?)+$" required 
                        title="Only alphanumeric characters"/>
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
