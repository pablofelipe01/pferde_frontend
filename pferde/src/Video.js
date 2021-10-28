import React, {useState} from "react";
// import ReactDom from "react-dom";
import ModalVideo from "react-modal-video"
import horses from './horses.json'

const Video = () => {

	const [isOpen, setOpen] = useState(true)

	return (
		<React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={horses.video_url} onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment>
	)
}

export default Video;