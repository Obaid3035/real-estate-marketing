import React from 'react';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import styles from '../../styles/FAQ.module.css';

const FAQ = () => {

	const faq = [
		{
			id: 1,
			question: 'Where is DAMAC Lagoons located?',
			answer: 'DAMAC Lagoons is adjacent to the iconic DAMAC Hills mega-community,\n' +
				'\t\t\t\t\t\t\t\twhich is famed for the Trump International Golf Club.\n' +
				'\t\t\t\t\t\t\t\tThanks to its location just off Hessa Street,\n' +
				'\t\t\t\t\t\t\t\tthe community provides easy access to two key Dubai highways, such as Emirates Road (E611)\n' +
				'\t\t\t\t\t\t\t\tand Sheikh Mohammed Bin Zayed Road (E311).'
		},
		{
			id: 2,
			question: 'What are the different types of property offered in DAMAC Lagoons?',
			answer: 'DAMAC Lagoons offers a range of townhouses and villas for sale with various layouts and sizes across 8 Mediterranean-inspired clusters.'
		},
		{
			id: 3,
			question: 'Is DAMAC Lagoons a good investment?',
			answer: 'Surrounded by unspoiled coves, cerulean lagoons, white-sandy beaches and lush green pastures, DAMAC Lagoons is a perfect investment whether as a private residence or with the purpose of generating a passive income. In particular, families with children will enjoy residing here thanks to the lagoon-facing lawns, family cabanas, infinity pools and much more. The projected ROI is set at 6%.'
		},
		{
			id: 4,
			question: 'How much does a property in DAMAC Lagoons cost?',
			answer: 'The starting price for a property in DAMAC Lagoons amounts to AED 1.8M (USD 490K), as of Q2 2022.\n'
		},
		{
			id: 5,
			question: 'What are the closest schools to DAMAC Lagoons?',
			answer: 'DAMAC Lagoons boasts close proximity to some of the most prestigious schools in the emirate, including Jebel Ali School, Fairgreen International School, Global Indian International School, Safa Community School and Kings\' School.'
		},
		{
			id: 6,
			question: 'What are the available amenities in Damac Lagoons?',
			answer: 'DAMAC Lagoons offers a range of leisure and wellness activities thanks to a D-shaped lazy river, a floating cinema, high-end retail, beaches, a water-integrated amphitheater, F&B venues, an island clubhouse, leisure and activity hubs and much more. Not forgetting plenty of lifestyle facilities like schools, nurseries, mosques, as well as a regional mall of nearly 2 million sq. ft, which all aim to facilitate your daily routine.'
		},
		{
			id: 7,
			question: 'What is the transport accessibility like?',
			answer: 'DAMAC Lagoons is situated at the junction of Hessa Street and Sheikh Zayed Bin Hamdan Al Nahyan Street, ensuring hassle-free commutes around the rest of Dubai. As for public transport links, the infrastructure has not been developed yet, therefore, it is recommended you move around by a private vehicle, for now.'
		},
		{
			id: 8,
			question: 'Is DAMAC Lagoons popular with families?',
			answer: 'DAMAC Lagoons is highly popular with families, as it offers unique learning-based amenities, such as a sensory plaza, a discovery maze, a camping island, an AR nature island, a VR Park, a Building Blocks Pavilion and more.\n'
		},
		{
			id: 9,
			question: 'Is DAMAC Lagoons pet-friendly?',
			answer: 'According to DAMAC Properties, the development will be pet-friendly as the community will have many parks, as well as hiking and biking trails, which will provide your pet with freedom to walk and run.\n'
		},
		{
			id: 10,
			question: 'Where can I book DAMAC Lagoons properties?',
			answer: 'You can find available options of DAMAC Lagoons homes and the latest promotions on this website. Our agents at Metropolitan Premium Properties will gladly provide you with more detailed information regarding your chosen property and can assist you with buying a villa/townhouse here without any hassle.\n'
		}
	]

	return (
		<Container className={styles.FAQ}>
			<h1 className={'text-center'}>FAQ</h1>
			<Row className={'mx-0'}>
				<Col md={12}>
					<Accordion defaultActiveKey="0">
						{
							faq.map((item) => (
								<React.Fragment key={item.id}>
									<Accordion.Item key={item.id} eventKey={item.id.toString()}>
										<Accordion.Header
											className={styles.FAQHeading}>{item.question}</Accordion.Header>
										<Accordion.Body>
											{item.answer}
										</Accordion.Body>
									</Accordion.Item>
									<hr/>
								</React.Fragment>
							))
						}
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default FAQ;
