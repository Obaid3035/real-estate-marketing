import React, {useState} from 'react';
import styles from '../../styles/TopBanner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SignUpForm from "@/component/SignUpForm/SignUpForm";
import {ToastContainer} from "react-toastify";

const TopBanner = () => {



	const videoProperties = [
		{
			id: 1,
			content: 'Discover the World\'s Most Lucrative Investment Market with Dubai Real Estate Properties',
			src: './burj.mp4',
			more: false
		},
		{
			id: 2,
			content: 'A Tax-free Investor-friendly Destination',
			content2: 'Political Stability',
			content3: 'Easy Golden Residential Visa',
			src: './dubai_2.mp4',
			more: true,
		},
		{
			id: 3,
			content: 'Guaranteed High Rental Yield',
			src: './lagoon.mp4',
			more: false
		},
	]

	const [show, setShow] = useState(false);



	return (
		<div className={styles.Carousel}>
			<SignUpForm show={show} close={() => setShow(false)}/>
			<Carousel
				autoPlay={false}
				showArrows={false}
				showStatus={false}
				showIndicators={true}
				showThumbs={false}
				infiniteLoop={true}

			>
				{
					videoProperties.map((videoObj) => {
						return (
							<div key={videoObj.id}>
								<div className={styles.OverLay}/>
								<video
									src={videoObj.src}
									autoPlay
									loop
									muted
								/>
								<div className={styles.Content}>
									<h1>{ videoObj.more ? '- ' : null }{ videoObj.content }</h1>
									{
										videoObj.more ? (
											<React.Fragment>
												<h1>- { videoObj.content2 }</h1>
												<h1>- { videoObj.content3 }</h1>
											</React.Fragment>
										) : null
									}
								</div>
								<button onClick={() => setShow(true)}>Sign Up</button>
							</div>
						)
					})
				}
			</Carousel>
		</div>
	);
};

export default TopBanner;
