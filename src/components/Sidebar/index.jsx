import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const handleNav = () => {
    setActive(!active)
  }

  const handleWindowScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <span className="logo-letter">D</span>
          <span className="logo-letter">R</span>
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/david-romero-58b7621a8/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JuanDavidRR"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>

      <header
        id="navbar-mobile"
        className={
          active ? 'nav-bar-mobile activate' : 'nav-bar-mobile inactivate'
        }
      >
        <Link className="logo" to="/">
          <span className="logo-letter">D</span>
          <span className="logo-letter">R</span>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                onClick={handleWindowScroll}
                exact="true"
                activeclassname="active"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleWindowScroll}
                activeclassname="active"
                className="about-link"
                to="/about"
              >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleWindowScroll}
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"
              >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleWindowScroll}
                activeclassname="active"
                className="contact-link"
                to="/contact"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/david-romero-58b7621a8/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JuanDavidRR"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </header>

      <button className="display-mobile-menu" onClick={handleNav}>
        {active ? (
          <FontAwesomeIcon icon={faClose} color="white" />
        ) : (
          <FontAwesomeIcon icon={faBars} color="white" />
        )}
      </button>
    </>
  )
}

export default Sidebar
