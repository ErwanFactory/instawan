import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Feed from './components/Feed/';
import posts from './assets/photos.json';

function App() {
  const filters = ['urban'];

  return (
    <div className="App">
      <TopBar />
      <Feed filters={filters} posts={posts} />
    </div>
  );
}

export default App;
