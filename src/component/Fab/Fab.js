import {FaQuoteLeft} from "react-icons/fa";
import styles from '../../styles/Fab.module.css'
import SignUpForm from "@/component/SignUpForm/SignUpForm";
import {useState} from "react";

const FAB = () => {

	const [show, setShow] = useState(false);

	return (
		<ul
			className={styles.fabContainer}
		>
			<SignUpForm show={show} close={() => setShow(false)}/>
			<li className={styles.fabButton}>
				<span onClick={() => setShow(true)}><FaQuoteLeft/></span>

			</li>
		</ul>
	);
};

export default FAB
