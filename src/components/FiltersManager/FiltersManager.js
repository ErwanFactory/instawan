import React from 'react';
import MainPage from '../MainPage';

class FiltersManager extends React.Component {

  constructor(props) {
    super(props);

    const { history } = props;

    this.state = {
      filters: this.getFiltersFromQueryParams(),
      history: history
    };

    this.handleFilterAdd = this.handleFilterAdd.bind(this);
    this.handleFilterDelete = this.handleFilterDelete.bind(this);
  }

  getFiltersFromQueryParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const tagsAsString = searchParams.get('tags');

    if (searchParams.get('tags')) {
      return tagsAsString.split(',');
    } else {
      return [];
    }
  }

  setFiltersInQueryParams(filters) {
    const searchParams = new URLSearchParams();

    if (filters.length > 0) {
      searchParams.set('tags', filters);
    }
    this.state.history.push('?' + searchParams.toString());
  }

  handleFilterAdd(filter) {
    this.state.filters.push(filter);
    this.setFiltersInQueryParams(this.state.filters);
  }

  handleFilterDelete(filter) {
    this.setState(state => { return { filters: state.filters.filter(f => f !== filter) }; },
      () => this.setFiltersInQueryParams(this.state.filters));
  }

  render() {
    return (
      <MainPage
        filters={this.state.filters}
        onFilterAdd={this.handleFilterAdd}
        onFilterDelete={this.handleFilterDelete} />
    );
  }
}

export default FiltersManager;
