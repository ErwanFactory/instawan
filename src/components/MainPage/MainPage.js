import React from 'react';
import './MainPage.css';
import TopBar from '../TopBar';
import Feed from '../Feed';
import getPhotos from '../../photos-api';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.addNewFilter = this.addNewFilter.bind(this);
  }

  addNewFilter(newFilters) {
    newFilters.forEach(filter => {
      this.props.onFilterAdd(filter);
    });
  }

  render() {
    const posts = getPhotos(this.props.filters);

    return (
      <React.Fragment>
        <TopBar onFiltersAddRequest={this.addNewFilter} />
        <Feed filters={this.props.filters} posts={posts} onFilterDelete={this.props.onFilterDelete} />
      </React.Fragment>
    );
  }
}

export default MainPage;
