import React from 'react';

import './review.css';

const Review = (props) => {
	const { review } = props;
	const star = '⭐️';

	return (
		<React.Fragment>
			<div className='review'>
				<h1 className='review-title'>
					{review.title} {star.repeat(review.rating)}
				</h1>
				<p className='review-description'>{review.description}</p>
				<span className='review-credit'>
					{review.username}, {review.date}
				</span>
			</div>
		</React.Fragment>
	);
};

export default Review;
