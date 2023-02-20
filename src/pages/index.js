import TopBanner from "@/component/TopBanner/TopBanner";
import React, {useEffect} from "react";
import Opportunity from "@/component/Opportunity/Opportunity";
import Projects from "@/component/Projects/Projects";
import Income from "@/component/Income/Income";
import Invest from "@/component/Invest/Invest";
import Developer from "@/component/Developer/Developer";
import FAQ from "@/component/FAQ/FAQ";
import Testimonials from "@/component/Testimonials/Testimonials";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Contact from "@/component/Contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {


	return (
		<>
			<FloatingWhatsApp
				avatar={'./avatar.png'}
				phoneNumber={'+14376550227'}
				accountName={'Arman Aftab'}/>
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
			<Testimonials/>
			<FAQ/>
			<Contact/>
		</>
	)
}
