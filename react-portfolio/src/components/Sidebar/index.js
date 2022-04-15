
import { Link } from 'react-router-dom'
import './index.scss'
import myLogo from '../../assets/images/bulb.png'

const Sidebar = () => (
    <div className ='nav-bar'>
        <link className='logo' to='/'>
            <img src={myLogo} alt="logo image" />
            <img src={myLogoSubtitle} alt="logo-image-subtitle" />

        </link>
    </div>

    )

export default Sidebar