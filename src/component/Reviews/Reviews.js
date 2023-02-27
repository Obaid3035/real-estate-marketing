import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Review from "@/component/Reviews/Review";
import styles from '../../styles/Review.module.css';

const Reviews = () => {

	const reviews = [
		{
			id: 1,
			name: 'Mansoor Baig',
			review: 'I had a wonderful experience with Aftab Ali. He was extremely patience with us as we took 3 months to find the right property. Aftab\'s knowledge of the market and the rate was impressive. Always ahead of the game and very truthfully told us about realistic factors.'
		},
		{
			id: 2,
			name: 'Ira',
			review: 'I\'m amazed how these people from Scope Real Estate knows very well about Dubai Real Estate, specially the off-plan properties coming. Less hassle when you are looking for the property, they know exactly what you are looking for. Will highly recommend this agency!!'
		},
		{
			id: 3,
			name: 'John Margetts',
			review: 'This was the second time that I had used Scope and Mr Humayan for a property transaction and for the second time...THEY DELIVERED!! They again showed high degree of professional knowledge about the process and kept me advised about progress through to completion.'
		}
	]

	return (
		<Container className={styles.Testimonials}>
			<div className={'text-center mb-4'}>
				<h1>Reviews</h1>
			</div>
			<Row className={'mx-0'}>
				{
					reviews.map((item) => (
						<Col md={4} key={item.id}>
							<Review name={item.name} review={item.review}/>
						</Col>
					))
				}
			</Row>
		</Container>
	);
};

export default Reviews;
