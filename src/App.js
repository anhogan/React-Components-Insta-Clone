import React, { useState } from "react";
import "./App.css";
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
import dummyData from './dummy-data';

const App = () => {
  const [post] = useState(dummyData)

  return (
    <div className="App">
      <SearchBar />
      <PostsPage post={post}/>
    </div>
  );
};

export default App;
