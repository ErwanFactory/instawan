import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Feed from './components/Feed/';
import { getPhotos, getPhotosByTags } from './photos-api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      posts: getPhotos()
    };

    this.addNewFilter = this.addNewFilter.bind(this);
    this.handleFilterDelete = this.handleFilterDelete.bind(this);
  }

  addNewFilter(newFilters) {
    const newFiltersCleaned = [];
    newFilters.map(filter => newFiltersCleaned.push(filter.replace(/\W+/g, '')));

    this.setState({ filters: newFiltersCleaned },
      () => this.setState({ posts: getPhotosByTags(this.state.filters) }));
  }

  handleFilterDelete(filterToDelete) {
    const remainingFilters = this.state.filters.filter(filter => filter !== filterToDelete);
    this.setState({ filters: remainingFilters },
      () => this.setState({ posts: getPhotosByTags(this.state.filters) }));
  }

  render() {
    return (
        <div className="App" >
          <TopBar onFiltersAddRequest={this.addNewFilter} />
          <Feed filters={this.state.filters} posts={this.state.posts} onFilterDelete={this.handleFilterDelete} />
        </div>
    );
  }
}

export default App;
