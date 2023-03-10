import TopBanner from "@/component/TopBanner/TopBanner";
import React, {useEffect} from "react";
import Opportunity from "@/component/Opportunity/Opportunity";
import Projects from "@/component/Projects/Projects";
import Income from "@/component/Income/Income";
import Invest from "@/component/Invest/Invest";
import Developer from "@/component/Developer/Developer";
import FAQ from "@/component/FAQ/FAQ";
import Reviews from "@/component/Reviews/Reviews";
import {FloatingWhatsApp} from 'react-floating-whatsapp'
import Contact from "@/component/Contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUpForm from "@/component/SignUpForm/SignUpForm";
import Fab from "@/component/Fab/Fab";
import Footer from "@/component/Footer/Footer";

export default function Home() {

	const [show, setShow] = React.useState(false);

	const [timer, setTimer] = React.useState(0)


	useEffect(() => {
		if (localStorage.getItem('Form') !== 'yes') {
			setShow(true)
			setTimer(7)
		}
	}, [])


	useEffect(() => {
		if (localStorage.getItem('Form') !== 'yes' && timer === 7) {

			const timeId = setTimeout(() => setShow(true),10000);
			return () => {
				clearTimeout(timeId)
				setTimer(15)
			}
		}
	}, [show])

	useEffect(() => {
		if (localStorage.getItem('Form') !== 'yes' && timer === 15) {
			console.log('BING2')
			const timeId = setTimeout(() => setShow(true),15000);
			return () => {
				clearTimeout(timeId)
				setTimer(0)
			}
		}
	}, [show])


	return (
		<>
			<SignUpForm show={show} close={() => setShow(false)}/>
			<Fab/>
			<FloatingWhatsApp
				avatar={'./avatar.png'}
				phoneNumber={'+14376550227'}
				accountName={'Sales Consultant'}/>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<TopBanner/>
			<Opportunity/>
			<Projects/>
			<Income/>
			<Invest/>
			<Developer/>
			<Reviews/>
			<FAQ/>
			<Contact/>
			<Footer/>
		</>
	)
}
