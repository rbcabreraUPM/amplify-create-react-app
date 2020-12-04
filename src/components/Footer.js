import React from 'react'
import '../static/css/Footer.css'

const Footer = ({ stickyStyle }) => {
  const footerStyle = stickyStyle
    ? 'footer-container sticky'
    : 'footer-container'
  return (
    <div className={`${footerStyle}`}>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>RJBC © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/in/reuben-joseph-cabrera-b46420132/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/rbcabreraUPM'
              aria-label='LinkedIn'
            >
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
