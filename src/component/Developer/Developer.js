import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Developer.module.css'

const Developer = () => {
	return (
		<Container className={styles.Developer}>
			<Row className={'justify-content-center'}>
				<h1>About the developer</h1>
				<p className={'mt-4 text-justify'}>DAMAC Properties is a <span>luxury real estate developer</span> based in Dubai, United Arab Emirates. </p>

				<p className={'text-justify'}>
					Awarded as <span>"Best Developer in the Middle East"</span>, DAMAC has completed numerous successful projects in Dubai,
					such as the iconic 50-storey Park Towers, the luxurious DAMAC Heights,
					the waterfront DAMAC Residenze in Dubai Marina, and the master-planned AKOYA Oxygen development,
					which features over 55 million square feet of lush greenery, parklands, and scenic outdoor spaces.
				</p>
			</Row>
		</Container>
	);
};

export default Developer;
