// create BackgroundVideo.js and use this code:
import React from 'react';

function BackgroundVideo() {
  // Extract the video ID from the URL
  const videoId = 'EhU1ZWWUuZ4?si=Mb9SsG3HdK7ILtZz';

  // YouTube embed URL with parameters for autoplay, hiding controls, and minimal branding
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&mute=1`;

  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Background Video"
    ></iframe>
  );
}

export default BackgroundVideo;