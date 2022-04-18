import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/styles.scss";
import StartPage from './pages/StartPage';
import FilmPage from './pages/FilmPage';
import FilmDetailPage from './pages/FilmDetailPage';
import FavPage from './pages/FavPage';
import ErrorPage from './pages/ErrorPage';

import './styles/styles.css'

function App() {
  return (
		<Routes>
			<Route path="/" element={<StartPage />} />
			<Route path="films" element={<FilmPage />} />
			<Route path="films/:id" element={<FilmDetailPage />} />
        	<Route path="favs" element={<FavPage />} />
			<Route path="*" element={ <ErrorPage /> } />
		</Routes>
    );
}

export default App;
