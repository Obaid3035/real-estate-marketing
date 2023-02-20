import React, { useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/Projects.module.css';
import Project from "@/component/Projects/Project";
import ProjectVideo from "@/component/Projects/ProjectVideo";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Nice',
			description: 'Townhouses and villas resembling the French Riviera with olive trees, picturesque beaches and splash pools',
			src: '/nice.jpeg'
		},
		{
			id: 2,
			title: 'Costa Brava',
			description: 'Premium homes in a Spanish style in the most adventurous area, ideal for extreme sports lovers',
			src: '/costa-brava.jpeg'
		},
		{
			id: 3,
			title: 'Portofino',
			description: 'Elite Townhouses and villas in the working hub of the community, full of unforgettable Ligurian vibes',
			src: '/portfolio.jpeg'
		}
	]

	const [show, setShow] = useState(false)
	const [video, setVideo] = useState(1)

	return (
		<Container className={styles.Projects}>
			<div className={'text-center mb-4'}>
				<h1>Projects</h1>
			</div>
			<ProjectVideo video={video} show={show} onClose={() => setShow(false)}/>
			<Row className={'mx-0 justify-content-between'}>
				{
					projects.map((item) => (
						<Col key={item.id} md={4} className={'my-3'}>
							<Project title={item.title} description={item.description} src={item.src} onModalOpen={() => {
								setVideo(item.id);
								setShow(true)
							}}/>
						</Col>
					))
				}
			</Row>
			<div className={styles.ComingSoon}>
				<p className={'mb-0 mt-4'}>Coming Soon</p>
			</div>
		</Container>
	);
};

export default Projects;
