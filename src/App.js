import React, { useState } from "react";
import "./App.css";
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
import dummyData from './dummy-data';

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const post = useState(dummyData)

  return (
    <div className="App">
      <SearchBar />
      <PostsPage post={post}/>
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
