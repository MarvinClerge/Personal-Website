import React from 'react'
import MediaVideo from './media-video'
import MediaSlideshow from './media-slideshow'

const MediaContainter = props => {

  return(
    <div className="media-container">
      <MediaSlideshow images={props.images} />
      <MediaVideo videoId={props.videoId} />
    </div>
  )
}

export default MediaContainter
