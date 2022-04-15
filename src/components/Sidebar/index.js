
import { Link } from 'react-router-dom'
import './index.scss'
import myLogo from '../../assets/images/bulb.png'

const Sidebar = () => (
    <div className ="nav-bar">
        <link className="logo" to="/">
            <img src={myLogo} alt="logo" />
        </link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#121717" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#121717" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#121717" />
            </NavLink>
        </nav>
    </div>

    )

export default Sidebar