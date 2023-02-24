import React, {useRef} from 'react'
import PropTypes from "prop-types";

function VideoFrame({embedId}) {

  const divRef = useRef(null);

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
      <img onClick={onClick} loading="lazy" src={`https://img.youtube.com/vi/${embedId}/mqdefault.jpg`} alt="YouTube Video Thumbnail" width={853} height={480} />
    </div>
  )
}

VideoFrame.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoFrame
