import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router'
import { Home, MovieDetail, PageNotFound, Footer, Header } from './Components/index'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
