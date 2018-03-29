import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    contactActive: false
  }

  renderContact = () => {
    if (this.state.contactActive) {
      return(
        <div className="contact" onClick={this.endContactActive}>
          <div className="contact-content">
            <div className="contact-exit">
              <button>X</button>
            </div>

            <table className="contact-item-top">
              <tbody>
                <tr>
                  <td className="contact-item">
                    Email:
                  </td>
                  <td>
                    <a href="mailto:clergemarvin@gmail.com">clergemarvin@gmail.com</a>
                  </td>
                </tr>

                <tr>
                  <td className="contact-item">
                    Phone:
                  </td>
                  <td>
                    <a href="tel:+16318041473">(631) 804-1473</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }

  startContactActive = event => {
    event.preventDefault()
    this.setState({
      contactActive: true
    })
  }

  endContactActive = event => {
    const allowed  = ['header', 'contact-exit']

    if ( allowed.includes(event.target.parentNode.className) ) {
      document.querySelector('.contact').classList.add("fadeout")

      setTimeout(() => {
        this.setState({
          contactActive: false
        })
      } , 200)
    }
  }

  render(){
    return (
      <div className="header" id="header">
        {this.renderContact()}

        <div className="header-main">
          <Link to="" className="header-main-link" onClick={this.startContactActive}>
            Contact
          </Link>

          <Link to="/"><div className="header-logo"></div></Link>
          <Link to="/about" className="header-main-link">About Me</Link>
        </div>

        <div className="header-links">
          <Link to="https://github.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/github.png')} alt="github" />
          </Link>

          <Link to="https://www.linkedin.com/in/marvinclerge/" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/linkedin.png')} alt="linkedin" />
          </Link>

          <Link to="https://twitter.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/twitter.png')} alt="twitter" />
          </Link>

          <Link to="https://medium.com/@clergemarvin/" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/medium.png')} alt="medium" />
          </Link>

        </div>
      </div>
    )
  }
}

export default Header
