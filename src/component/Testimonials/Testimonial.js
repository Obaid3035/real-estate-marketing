import React from 'react';
import styles from '../../styles/Testimonial.module.css';

const Testimonial = ({ name, review}) => {
	return (
		<div className={styles.Testimonial}>
			<div className={'text-center mt-3'}>
				<img alt={'client'} src={'/avatar.png'} />
			</div>
			<p className={'mt-4'}>{ review }</p>
			<h4 className={'mt-3'}>{ name }</h4>
		</div>
	);
};

export default Testimonial;
