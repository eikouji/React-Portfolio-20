
import { Link } from 'react-router-dom'
import './index.scss'
import myLogo from '../../assets/images/logo-example.png'
import myLogoSubtitle from '../../assets/images/logo-subtitle-example.png'

const Sidebar = () => (
    <div className ='nav-bar'>
        <link className='logo' to='/'>
            <img src={myLogo} alt="logo image" />
            <img src={myLogoSubtitle} alt="logo-image-subtitle" />

        </link>
    </div>

    )

export default Sidebar