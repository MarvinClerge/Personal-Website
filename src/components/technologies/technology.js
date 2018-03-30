import React, { Component } from 'react'

class Technology extends Component {
  state = {
    active: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return(
      <section className="technology" onClick={this.toggleActive}>
        <div>
          {this.props.name}
        </div>
        <div className="technology-use">
          {this.props.use}
        </div>
      </section>
    )
  }
}

export default Technology
