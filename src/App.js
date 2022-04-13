import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router, Routes } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="films" element={<FilmPage />} />
        <Route path="/favs" element={<FavPage />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;
