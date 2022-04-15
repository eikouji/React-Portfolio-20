import { Link } from 'react-router-dom';
import myLogo from '../../assets/images/bulb.png';
import './components/Home/index.scss'



Const Home = () => {
    


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, my name is Eiko
                Welcome to my website. I built this myself!
                <br />
                </h1>

                <h2>web developer / hobby artist </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>

        </div>
    );
}

export default Home 