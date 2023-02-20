import React from 'react';
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import {Modal} from "react-bootstrap";

const ProjectVideo = ({show, onClose, video}) => {

	function videoHandler() {
		if (video === 1) return "https://www.youtube.com/embed/7hg2BD8_vOA";
		else if (video === 2) return "https://www.youtube.com/embed/NUX3d1dSByM"
		else if (video === 3) return "https://www.youtube.com/embed/_QeCpQghOfo"
	}

	return (
		<Modal
			centered={true}
			onHide={onClose}
			show={show}
		>
			<iframe width="560" height="315" src={ videoHandler()  }
			        title="YouTube video player" frameBorder="0"
			        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			        allowFullScreen/>
		</Modal>
	);
};

export default React.memo(ProjectVideo);
