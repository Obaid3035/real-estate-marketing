import React, {useState, memo} from 'react';
import styles from '../../styles/Projects.module.css';
import ProjectVideo from "@/component/Projects/ProjectVideo";

const Project = ({ title, description, src, onModalOpen }) => {
	return (
		<div className={styles.Project} onClick={onModalOpen}>
			<h4>{ title }</h4>
			<p>{ description }</p>
			<img alt={'costa-brava'} src={src}/>
		</div>
	);
};

export default memo(Project);
