import React from 'react';
import styles from '../../styles/Opportunity.module.css';
import {Container, Row} from "react-bootstrap";

const Opportunity = () => {
	return (
		<Container className={styles.Opportunity}>
			<Row className={'justify-content-center'}>
				<h1>Investment Opportunities</h1>
				{/*<div className={styles.Line}/>*/}
				<p className={'mt-4'}>Surrounded by unspoiled coves, cerulean lagoons, white-sandy beaches and lush green pastures,
					DAMAC Lagoons is a perfect investment whether as a private residence or with the purpose of generating a passive income.
					In particular, families with children will enjoy residing here thanks to the lagoon-facing lawns, family cabanas,
					infinity pools and much more. The projected ROI is set at 8%.</p>
			</Row>
		</Container>
	);
};

export default Opportunity;
