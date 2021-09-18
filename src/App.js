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
	const moveToSectionAbout = () => {
		const section = document.querySelector('.section-about');
		section.scrollIntoView({ behavior: 'smooth' });
	};

	const moveToSectionReview = () => {
		const section = document.querySelector('.section-review');
		section.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Router>
			<div className='app'>
				<Header className='header sticky'>
					<h1>
						<Link to='/' className='logo'>
							Random Picker
						</Link>
					</h1>
					<Navigation about={moveToSectionAbout} review={moveToSectionReview} />
				</Header>
				<Footer />
				<Switch>
					<Route path='/' exact>
						<Home about={moveToSectionAbout} />
					</Route>
					<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
