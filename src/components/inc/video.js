
import React from "react";
import PropTypes from "prop-types";

const Video = ({ embedId }) => (
  
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/cP3QGrm6mk4?enablejsapi=1&hd=1&controls=0&html5=1&showinfo=0&autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>

);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video