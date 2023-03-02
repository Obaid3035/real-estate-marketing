import React, {useState} from 'react';
import styles from '../../styles/TopBanner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SignUpForm from "@/component/SignUpForm/SignUpForm";
import ReactPlayer from "react-player";

const TopBanner = () => {
	
	const videoProperties = [
		{
			id: 1,
			content: 'Discover the World\'s Most Lucrative and Investor-friendly Investment Market with Dubai Real Estate Properties',
			src: './video_1.mp4',
			more: false
		},
		{
			id: 2,
			content: 'Dubai is a Tax-free Destination with Guaranteed High Rental Yield and provides 10 year Golden Visa',
			src: './video_2.mp4',
			more: false,
		},
		{
			id: 3,
			content: 'Dubai is the Top Safest Tourist Destination',
			src: './video_3.mp4',
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
				emulateTouch={false}
				preventMovementUntilSwipeScrollTolerance={true}

			>
				{
					videoProperties.map((videoObj) => {
						return (
							<div key={videoObj.id}>
								<div className={styles.OverLay}/>
								<video
									webkit-playsinline
									src={videoObj.src}
									autoPlay={false}
									controls={false}
									loop
									muted
								/>
								<div className={styles.Content}>
									<h1>{ videoObj.content }</h1>
									{
										videoObj.more ? (
											<React.Fragment>
												<h1>{ videoObj.content2 }</h1>
												<h1>{ videoObj.content3 }</h1>
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
