import React from 'react'
import Header from './header'
import Footer from './footer'

const ErrorPage = props => {
  return(
    <div>
      <Header />
      <section className="error-page">
        <h1>ERROR 404</h1>
        <p>That page does not exist</p>
      </section>
      <Footer />
    </div>
  )
}

export default ErrorPage
