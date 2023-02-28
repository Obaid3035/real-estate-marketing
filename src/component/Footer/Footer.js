import React from 'react';
import {Modal} from "react-bootstrap";
const Footer = () => {

	const [privacy, setPrivacy] = React.useState(false);
	const [terms, setTerms] = React.useState(false);
	const privacyModal = (
		<Modal show={privacy} onHide={() => setPrivacy(false)} centered={true} size={'lg'}>
			<Modal.Header>
				<h3>Privacy Policy</h3>
			</Modal.Header>
			<Modal.Body>
				<p>Thank you for considering our real estate lead generation landing page. Protecting your privacy is very important to us. Please read our privacy policy carefully to understand how we collect, use, and disclose your personal information.</p>
				<h5>Collection of Personal Information:</h5>
				<p>We collect your name, phone number, and email address when you fill out our lead generation form. This information is collected for the sole purpose of providing you with information about the real estate services that we offer. We may also collect other information, such as your IP address and browser type, through the use of analytics tracking. This information is used to improve our website and better understand our audience.</p>
				<h5>Use of Personal Information:</h5>
				<p>We use your personal information to contact you and provide you with the information you requested. We may also use your personal information to contact you about other real estate services that we offer that may interest you. You can always opt-out of receiving such communications from us by contacting us at the email address or phone number provided on our landing page. We use the information collected through analytics tracking to improve our website and better understand our audience.</p>
				<h5>Disclosure of Personal Information:</h5>
				<p>We do not sell or disclose your personal information to any third parties for marketing purposes. We may disclose your personal information to our trusted service providers who assist us in operating our website, conducting our business, or providing services to you. We require these service providers to maintain the confidentiality of your personal information and to use your personal information only for the purposes for which it was provided.</p>
				<h5>Security of Personal Information:</h5>
				<p>We take reasonable measures to protect the security of your personal information. However, no security measures are 100% effective, and we cannot guarantee the security of your personal information.</p>
				<h5>Retention of Personal Information:</h5>
				<p>We retain your personal information for as long as necessary to provide you with the information or services you requested, or as required by law.</p>
				<h5>Changes to this Privacy Policy:</h5>
				<p>We may update this privacy policy from time to time. When we do, we will revise the "last updated" date at the top of the policy. We encourage you to review this privacy policy periodically to stay informed about how we are protecting your personal information.</p>
				<h5>Contact Us:</h5>
				<p>If you have any questions or concerns about our privacy policy or our collection, use, or disclosure of your personal information, please contact us at the email address or phone number provided on our landing page.</p>
			</Modal.Body>
		</Modal>
	)

	const termsModal = (
		<Modal show={terms} onHide={() => setTerms(false)} centered={true} size={'lg'}>
			<Modal.Header>
				<h3>Terms and Condition</h3>
			</Modal.Header>
			<Modal.Body>
				<p>Thank you for considering our real estate lead generation landing page. Please read our terms and conditions carefully before using our website.</p>
				<h5>Acceptance of Terms:</h5>
				<p>By using our website, you agree to these terms and conditions. If you do not agree to these terms and conditions, please do not use our website.</p>
				<h5>Collection of Personal Information:</h5>
				<p>We collect your name, phone number, and email address when you fill out our lead generation form. This information is collected for the sole purpose of providing you with information about the real estate services that we offer. We may also collect other information, such as your IP address and browser type, through the use of analytics tracking. This information is used to improve our website and better understand our audience.</p>
				<h5>Use of Personal Information:</h5>
				<p>We use your personal information to contact you and provide you with the information you requested. We may also use your personal information to contact you about other real estate services that we offer that may interest you. You can always opt-out of receiving such communications from us by contacting us at the email address or phone number provided on our landing page. We use the information collected through analytics tracking to improve our website and better understand our audience.</p>
				<h5>Intellectual Property:</h5>
				<p>All content on our website, including text, graphics, logos, images, and software, is the property of our company and is protected by Canadian and international copyright laws. You may not copy, reproduce, distribute, or use any content on our website without our express written permission.</p>
				<h5>Disclaimer of Warranties:</h5>
				<p>We provide our website and the information contained on it on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our website or the information, content, materials, or products included on our website. To the fullest extent permissible by applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
				<h5>Limitation of Liability:</h5>
				<p>We will not be liable for any damages of any kind arising from the use of our website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
				<h5>Governing Law:</h5>
				<p>These terms and conditions are governed by the laws of the Province of Ontario and the federal laws of Canada. Any legal action arising out of or relating to these terms and conditions shall be filed in the courts located in the Province of Ontario, Canada.</p>
				<h5>Changes to Terms and Conditions:</h5>
				<p>We may update these terms and conditions from time to time. When we do, we will revise the "last updated" date at the top of the terms and conditions. We encourage you to review these terms and conditions periodically to stay informed about any updates.</p>
				<h5>Contact Us:</h5>
				<p>If you have any questions or concerns about our terms and conditions, please contact us at the email address or phone number provided on our landing page.</p>
			</Modal.Body>
		</Modal>
	)

	return (
		<React.Fragment>
			{privacyModal}
			{termsModal}
			<hr/>
			<div className={'d-flex align-items-center justify-content-around'}>
				<p style={{
					cursor: 'pointer'
				}} onClick={() => setPrivacy(true)}>Privacy Policy</p>
				<p style={{
					cursor: 'pointer'
				}} onClick={() => setTerms(true)}>Terms and condition</p>
			</div>
		</React.Fragment>
	);
};

export default Footer;
