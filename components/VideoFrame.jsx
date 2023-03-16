import React, {useRef} from 'react'
import PropTypes from "prop-types";
import Image from 'next/image'

function VideoFrame({embedId, instalacion}) {

  const instalacionNew = (instalacion.instalacion)
  const {image, name} = instalacionNew
  const divRef = useRef(null);
  const myLoader = ({ src, width, quality }) => {
  const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
  return `${newImage}?w=${width}&q=${quality || 70}`
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
      <Image
        onClick = {onClick}
        alt={name}
        loader={myLoader}
        src={image[[0]].asset._ref}
        width={800}
        height={500}
        priority
        quality={50}
         />
    </div>
  )
}

VideoFrame.propTypes = {
  embedId: PropTypes.string.isRequired,
};


export default VideoFrame
