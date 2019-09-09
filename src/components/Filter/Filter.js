import React from 'react';
import Chip from '@material-ui/core/Chip';
import './Filter.css';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onFilterDelete(this.props.filter);
    }

    render() {
        return (
            <Chip
                label={'#' + this.props.filter}
                onDelete={this.handleDelete}
                className="filter"
                color="primary"
            />
        );
    }
}

export default Filter;
