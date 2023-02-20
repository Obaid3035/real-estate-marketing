import React, {memo} from 'react';
import styles from '../../styles/Projects.module.css';
import { Image } from "react-bootstrap";

const Project = ({ title, description, src, onModalOpen }) => {
	return (
		<div className={styles.Project} onClick={onModalOpen}>
			<h4>{ title }</h4>
			<p>{ description }</p>
			<Image alt={'costa-brava'} src={src}/>
		</div>
	);
};

export default memo(Project);
