import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './components/favorites/favorites';
import Home from './components/home/home';
import Image from './components/image/image';
import store from './redux/store';
import { Provider } from 'react-redux';


function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/gallery" index element={<Home />} />
						<Route path="/gallery/favorites" element={<Favorites />} />
						<Route path="/gallery/image" element={<Image />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
