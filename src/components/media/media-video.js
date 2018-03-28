import React from 'react'

const MediaVideo = props => {
  return (
    <div className="media-video">
      <h2>Video</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.videoId}`}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  )
}

export default MediaVideo
