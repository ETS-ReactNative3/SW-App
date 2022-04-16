import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

import StartPage from './pages/StartPage';
import FilmPage from './pages/FilmPage';
import FilmDetailPage from './pages/FilmDetailPage';
import FavPage from './pages/FavPage';


function App() {
  return (
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="films" element={<FilmPage />} />
				<Route path="films/:id" element={<FilmDetailPage />} />
        <Route path="favs" element={<FavPage />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
