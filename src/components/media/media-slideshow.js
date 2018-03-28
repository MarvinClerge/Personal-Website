import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MediaSlideshow extends Component {
  state = {
    image: 0,
    paused: false
  }

  componentDidMount(){
    this.startInterval()
  }

  componentWillUnmount(){
    this.removeInterval()
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      this.nextImage()
    }, 3000)
  }

  removeInterval = () => {
    clearInterval(this.interval)
  }

  nextImage = () => {
    if (this.state.image === this.props.images.length - 1) {
      this.setState({
        image: 0
      })
    } else {
      this.setState({
        image: this.state.image + 1
      })
    }
  }

  render(){
    const image =this.props.images[this.state.image]

    return(
      <div className="media-slideshow">
        <h2>Screenshots</h2>
        <Link to={image} target="_blank">
          <img src={image} alt="screnshot" />
        </Link>
      </div>
    )
  }
}

export default MediaSlideshow
