import React from 'react';
import {Form, Modal, Spinner} from "react-bootstrap";
import { ImCross } from 'react-icons/im';
import styles from '../../styles/SignUpForm.module.css';
import {writeInfo} from "@/helper/managedb";
import {toast, ToastContainer} from "react-toastify";

const SignUpForm = ({ show, close }) => {
	const [loader, setLoader] = React.useState(false);


	const successToast = (msg) => {
		toast.success(msg, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	const errorToast = (msg) => {
		toast.error(msg, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	const [form, setForm ] = React.useState({
		name: '',
		phoneNumber: '',
		email: ''
	})

	const onFormSubmit = async (e) => {
		e.preventDefault();
		setLoader(true)
		try {
			if (form.phoneNumber === '' || form.email === '') {
				errorToast('Fields cannot be empty')
				setLoader(false)
				return;
			}
			await writeInfo(form.name, form.phoneNumber, form.email);
			successToast('Thank you for signing up');
			localStorage.setItem('Form', 'yes')
			setForm({
				name: '',
				email: '',
				phoneNumber: ''
			})
			setLoader(false);
			close();
		} catch (e) {
			errorToast('Something went wrong');
			setForm({
				name: '',
				email: '',
				phoneNumber: ''
			})
			setLoader(false)
			close();
		}
	}

	const onChangeHandler = async (e) => {
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value
		})
	}

	return (
		<Modal
			show={show}
			className={styles.SignUpForm}
			animation={true}
			centered={true}

		>
			<Modal.Header className={styles.SignUpFormHeader}>Book your free complimentary trip to Dubai NOW! <ImCross onClick={close}/></Modal.Header>
			<Modal.Body>
				<Form className={'text-center'} onSubmit={onFormSubmit}>
					<Form.Control name={'name'} value={form.name} onChange={onChangeHandler} type={'text'} className={'mb-3'} placeholder={'Your Name'} />
					<Form.Control  name={'phoneNumber'} value={form.phoneNumber} onChange={onChangeHandler} type={'text'} className={'mb-3'} placeholder={'Your Number'}/>
					<Form.Control name={'email'} value={form.email}  type={'email'} onChange={onChangeHandler} className={'mb-3'} placeholder={'Your Email'}/>
					{
						!loader ? <button>Submit</button>
							: (
								<div className={'text-center'}>
									<Spinner/>
								</div>
							)
					}
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default SignUpForm;
