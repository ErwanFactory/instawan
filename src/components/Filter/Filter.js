import React from 'react';
import Chip from '@material-ui/core/Chip';
import './Filter.css';

class Filter extends React.Component {

    constructor(props) {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        console.log('Delete the filter');
    }

    render() {
        return (
            <Chip
                label="#urban"
                onDelete={this.handleDelete}
                color="primary"
            />
        );
    }
}

export default Filter;
