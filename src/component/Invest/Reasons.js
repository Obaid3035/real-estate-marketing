import React from 'react';
import styles from '../../styles/Reasons.module.css'

const Reasons = ({ icon, text }) => {
	return (
		<div className={styles.Reasons}>
			{icon}
			<p className={'my-0 mx-3'}>{text}</p>
		</div>
	);
};

export default Reasons;
