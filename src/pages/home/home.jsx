import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';

import Container from '../../shared-component/container/container';
import Mode from '../../components/mode/mode';
import Review from '../review/review';

import modes from '../../data/modes';
import reviews from '../../data/reviews';

import './home.css';

const Home = (props) => {
	return (
		<main>
			<section className='section-hero'>
				<div className='hero-container'>
					<div className='hero-text-box'>
						<h1 className='heading-primary'>All In One Random Generator</h1>
						<p className='hero-description'>
							Do you have a hard time to make decisions? Random Picker is very
							easy and simple to use with various modes!
						</p>
						<div className='btns'>
							<Link to='#' className='btn btn--full'>
								Download App
							</Link>
							<Link to='#' className='btn btn--outline'>
								Learn More &darr;
							</Link>
						</div>
						<div className='appstore'>
							<div className='appstore-imgs'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStarHalfAlt />
							</div>
							<p className='appstore-text'>4.7</p>
						</div>
					</div>
					<div className='hero-image-box'>
						<img
							src='./images/hero-temp.png'
							className='hero-img'
							alt='Random Picker mobile app screenshot'
						/>
					</div>
				</div>
			</section>
			<section className='section-about'>
				<Container>
					<span className='subheading'>6+ modes</span>
					<h2 className='heading-secondary'>Explore our features!</h2>
				</Container>
				<Container className='container-mode'>
					{modes.map((mode) => (
						<Mode key={mode.id} mode={mode} />
					))}
				</Container>
			</section>
			<section className='section-screenshot'>
				<Container>
					<span className='subheading'></span>
				</Container>
				<Container className='about-imgs'>
					<img
						className='about-img'
						src='./images/app/app1.jpg'
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src='./images/app/app2.jpg'
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src='./images/app/app3.jpg'
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src='./images/app/app4.jpg'
						alt='Random Picker Mobile App Screenshot'
					/>
				</Container>
			</section>
			<section className='section-review'>
				<Container>
					<span className='subheading'>Reviews</span>
					<h2 className='heading-secondary'>What Our Users Say</h2>
				</Container>
				<Container className='container-carousel'>
					<Carousel>
						{reviews.map((review) => (
							<Review key={review.id} review={review} />
						))}
					</Carousel>
				</Container>
			</section>
		</main>
	);
};

export default Home;
