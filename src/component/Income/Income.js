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
					{/*<div className={styles.Line}/>*/}
					<div className={styles.List}>
						<div>
							<TiTick/>
							<p>Selling Price: AED 1.8M</p>
						</div>
						<div>
							<TiTick/>
							<p>Choose From: 3BR, 4BR and 5BR</p>
						</div>
						<div >
							<TiTick/>
							<p>80/20 Payment Plan</p>
						</div>
						<div>
							<TiTick/>
							<p>Expected Rental Income: 8%</p>
						</div>
						<div >
							<TiTick/>
							<p>Completion Date: June 2026</p>
						</div>
						<div>
							<TiTick/>
							<p>Crypto Finance Available </p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Income;
