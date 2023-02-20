import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Income.module.css';
import contactStyles from '../../styles/Contact.module.css'
import { IoLogoWhatsapp } from 'react-icons/io';

const Income = () => {
	return (
		<Container className={styles.Income}>
			<Row className={'mx-0'}>
				<Col md={5} className={'px-4'}>
					<h1>Contact Us </h1>
					<div className={contactStyles.Info}>
						<p><IoLogoWhatsapp/> Number: <span>+14376550227</span></p>
						<p className={'my-3'}>Contact Number: <span>+14376550227</span></p>
						<p>Address: <span>Address: 22-Brimley Road, Scarborough, ON. Canada. M1J 1A4 </span></p>
					</div>
				</Col>
				<Col md={6} className={contactStyles.InfoImage}/>
			</Row>
		</Container>
	);
};

export default Income;
