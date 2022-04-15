import './index.scss'
import MyLogo from '../../assets/images/bulb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={MyLogo} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#121717" />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#121717" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#121717" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://lnk.bio/eikouji"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLink} color="#121717" />
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
