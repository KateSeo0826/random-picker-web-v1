import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';

import Navigation from './shared-component/navigation/navigation';
import Header from './shared-component/header/header';
import Home from './pages/home/home';
import Footer from './shared-component/footer/footer';

import './app.css';
import './app-queries.css';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Header className='header'>
					<h1>
						<Link to='/' className='logo'>
							Random Picker
						</Link>
					</h1>
					<Navigation />
				</Header>
				<Footer />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
