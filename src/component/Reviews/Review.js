import React from 'react';
import styles from '../../styles/Review.module.css';
import {AiFillStar} from "react-icons/ai";

const Review = ({name, review}) => {
	const stars = [0, 1, 2, 3, 4]
	return (
		<div className={styles.Testimonial}>
			<h4 className={'mt-3'}>{name}</h4>
			{
				stars.map((star) => <AiFillStar key={star}/>)
			}
			<p className={'mt-4'}>{review}</p>
		</div>
	);
};

export default Review;
