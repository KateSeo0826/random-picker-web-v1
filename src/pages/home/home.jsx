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
import hero from '../../assets/images/hero.png';
import app1 from '../../assets/images/app/app1.jpg';
import app2 from '../../assets/images/app/app2.jpg';
import app3 from '../../assets/images/app/app3.jpg';
import app4 from '../../assets/images/app/app4.jpg';

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
							<Link
								to={{
									pathname:
										'https://apps.apple.com/us/app/random-picker/id1435548123',
								}}
								target='_blank'
								title='Go to App Store preview page'
								className='btn btn--full'
							>
								Download App
							</Link>

							<Link to='#' className='btn btn--outline' onClick={props.about}>
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
							src={hero}
							className='hero-img'
							alt='Random Picker mobile app screenshot'
						/>
						Illustration by{' '}
						<p className='text'>
							<a
								target='_blank'
								href='https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6'
							>
								Icons 8{' '}
							</a>
							from{' '}
							<a target='_blank' href='https://icons8.com/illustrations'>
								Ouch!
							</a>
						</p>
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
						src={app1}
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src={app2}
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src={app3}
						alt='Random Picker Mobile App Screenshot'
					/>
					<img
						className='about-img'
						src={app4}
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
