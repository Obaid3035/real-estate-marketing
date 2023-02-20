import React from 'react';
import styles from '../../styles/Invest.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Reasons from "@/component/Invest/Reasons";
import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiUpgrade, GiWorld } from 'react-icons/gi';
import { TiWeatherSunny } from 'react-icons/ti';
import { BsBuilding } from 'react-icons/bs';

const Invest = () => {
	return (
		<Container className={styles.Invest}>
			<Row className={'justify-content-center m-0'}>
				<div>
					<h1>Why invest in Dubai</h1><br/>
				</div>
			</Row>

			<Row className={'justify-content-center m-0'}>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'Tax Free Investment:'} icon={<MdOutlineAttachMoney/>}/>
				</Col>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'Easy Golden Residential'} icon={<AiOutlineHome/>}/>
				</Col>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'High Standard of Living'} icon={<GiUpgrade/>}/>
				</Col>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'Tropical Weather'} icon={<TiWeatherSunny/>}/>
				</Col>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'Top Safest Country in the World'} icon={<AiOutlineSafetyCertificate/>}/>
				</Col>
				<Col md={5} className={'mx-3'}>
					<Reasons text={'Word-class Infrastructure'} icon={<BsBuilding/>}/>
				</Col>
			</Row>
		</Container>
	);
};

export default Invest;
