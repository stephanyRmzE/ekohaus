import React, {useRef} from 'react'
import PropTypes from "prop-types";
import Image from 'next/image'

function VideoFrame({embedId}) {

  const divRef = useRef(null);
  const myLoader = ({ src, width, quality }) => {

  return `https://img.youtube.com/vi/${src}/mqdefault.jpg?w=${width}&q=${quality || 75}`
  }

  const onClick = () => {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.style.width = "853";
      iframe.style.height = "480";
      iframe.setAttribute("src", `https://www.youtube.com/embed/${embedId}?rel=0&showinfo=1&autoplay=1`);
      if (divRef.current) {
          divRef.current.innerHTML = "";
          divRef.current.appendChild(iframe);
      }
  };
  return (
    <div ref={divRef} className="video-responsive">
      <Image onClick={onClick} loader={myLoader} src={embedId} alt="YouTube Video Thumbnail" width={853} height={480} />
    </div>
  )
}

VideoFrame.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoFrame
