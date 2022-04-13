import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import FilmPage from './pages/FilmPage';
import FavPage from './pages/FavPage';


function App() {
  return (
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="films" element={<FilmPage />} />
        <Route path="favs" element={<FavPage />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
