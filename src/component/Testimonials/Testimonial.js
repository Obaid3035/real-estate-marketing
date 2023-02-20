import React from 'react';
import styles from '../../styles/Testimonial.module.css';
import Image from "next/image";

const Testimonial = ({name, review}) => {
	return (
		<div className={styles.Testimonial}>
			<div className={'text-center mt-3'}>
				<Image width={80}  height={80} alt={'client'} src={'/avatar.png'}/>
			</div>
			<p className={'mt-4'}>{review}</p>
			<h4 className={'mt-3'}>{name}</h4>
		</div>
	);
};

export default Testimonial;
