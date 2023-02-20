import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Developer.module.css'

const Developer = () => {
	return (
		<Container className={styles.Developer}>
			<Row className={'justify-content-center'}>
				<h1>About the developer</h1>
				<p className={'mt-4'}>DAMAC Properties is a luxury real estate developer based in Dubai, United Arab Emirates.
					DAMAC has a track record of developing high-end luxury residential and commercial properties. </p>

				<p>
					Awarded as "Best Developer in the Middle East",
					DAMAC has completed numerous successful projects in Dubai,
					such as the iconic 50-storey Park Towers, the luxurious DAMAC Heights,
					the waterfront DAMAC Residenze in Dubai Marina, and the master-planned AKOYA Oxygen development,
					which features over 55 million square feet of lush greenery, parklands, and scenic outdoor spaces.
				</p>

				<p>
					DAMAC's track record of success, innovative designs,
					and commitment to quality has positioned it as a leading developer in the Middle East,
					with a strong reputation for delivering exceptional properties and creating valuable investment opportunities for its clients.
				</p>
			</Row>
		</Container>
	);
};

export default Developer;
