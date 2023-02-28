import React from 'react';
import styles from '../../styles/Opportunity.module.css';
import {Container, Row} from "react-bootstrap";

const Opportunity = () => {
	return (
		<Container className={styles.Opportunity}>
			<Row className={'justify-content-start'}>
				<h1>Investment Opportunities</h1>
				<p className={'mt-4'}>Surrounded by unspoiled <span>coves</span>, cerulean <span>lagoons</span>, white-sandy <span>beaches</span> and lush green <span>pastures</span>,
					DAMAC Lagoons is a <span>perfect investment</span> whether as a private residence or with the purpose of generating a <span>passive income</span>.
					In particular, families with children will enjoy residing here thanks to the lagoon-facing lawns, family cabanas,
					infinity pools and much more. The projected <span>ROI is set at 8%</span>.</p>
			</Row>
		</Container>
	);
};

export default Opportunity;
