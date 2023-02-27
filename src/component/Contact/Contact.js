import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Income.module.css';
import contactStyles from '../../styles/Contact.module.css'
import { IoLogoWhatsapp } from 'react-icons/io';

const Income = () => {
	return (
		<Container className={styles.Income}>
			<Row className={'mx-0 justify-content-between'}>
				<Col md={6} className={'px-4'}>
					<h1>Contact Us </h1>
					<p style={{
						fontWeight: 500
					}}>Want to know more? Schedule a meeting with us to further discuss your investment.</p>
					<div className={contactStyles.Info}>
						<p><IoLogoWhatsapp/> Number: <span>+1-437-655-0227</span></p>
						<p className={'my-3'}>Phone Number: <span>+1-437-655-0227</span></p>
						<p>Canada: <span>22-Brimley Road, Scarborough, ON. Canada. M1J 1A4 </span></p>
						<p>United Arab Emirates: <span>Office 3018, building 3 Emaar Gold and Diamond Park - Sheikh Zayed Rd - Dubai - United Arab Emirates</span></p>
					</div>
				</Col>
				<Col md={5} className={contactStyles.InfoImage}/>
			</Row>
		</Container>
	);
};

export default Income;
