import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';




function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth/>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;
