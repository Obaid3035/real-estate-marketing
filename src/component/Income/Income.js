import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Income.module.css';
import { TiTick } from 'react-icons/ti'

const Income = () => {
	return (
		<Container className={styles.Income}>
			<Row className={'mx-0'}>
				<Col md={6} className={styles.IncomeImage}/>
				<Col md={5} className={'px-4'}>
					<h1>Great Opportunity for Passive Income </h1>
					<div className={styles.List}>
						<p><span>Starting at Price:</span>  $700,000 CAD</p>
						<p><span>Payment Plan:</span> 80/20</p>
						<p><span>Expected Rental Income:</span> 8%</p>
						<p><span>Completion Date:</span> June 2026</p>
						<p><span>Crypto Finance:</span> Available</p>
						<p><span>Crypto Payment:</span> Accepted</p>
						<p><span>Choose From:</span> 3BR, 4BR and 5BR</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Income;
