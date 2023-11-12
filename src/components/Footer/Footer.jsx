import "./Footer.scss";
import { EMAIL } from '../../constants';
import Button from '../Button/Button';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Developed with ❤️ by Samarth</p>
            <Button><a href={`mailto:${EMAIL}?subject=Hi Samarth, We'd Like to Hire You!`} target="_blank" rel="noopener noreferrer">Hire Me</a></Button>
        </footer>
    )
}

export default Footer;
