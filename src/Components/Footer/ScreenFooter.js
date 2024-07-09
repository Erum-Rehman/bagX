import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import InputText from '../Input';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const ScreenFooter = () => {
    return (
        <>
            <div className='footer'> 
                <div className='container-footer'>
                    <div className='rules'>
                        <p>CUSTOMER SUPPORT</p>
                        <ul className='terms'> 
                            <li>Contact us</li>
                            <li>Payment Options</li>
                            <li>Terms of Service</li>
                            <li>Return & Exchange</li> 
                            <li>Privacy Policy</li>
                            <li>Shipping & Handling</li>
                            <li>Refund Policy</li>
                            <li>FAQS</li> 
                            <li>Blogs </li>
                        </ul>
                    </div>
                    <div className='rules'> 
                        <div className='footer-img'>
                            <p>SIGN UP AND SAVE</p>
                            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>                        </div>
                        <div> 
                            <InputText>Enter Your Email</InputText>
                        </div>
                        <div>
                            <ul className="social-list"> 
                                <li><FacebookOutlinedIcon className='social' /></li>
                                <li><AiOutlineInstagram className='social' /></li>
                                <li><FaLinkedinIn className='social' /></li>
                                <li><FaTwitter className='social' /></li> 
                                <li><YouTubeIcon className='social' /></li>
                                <li><PinterestIcon className='social' /></li>
                            </ul>
                        </div> 
                    </div>
                    <div className='rules'>
                        <p>ADDRESS</p>
                        <p style={{ fontWeight: '500' }}>Head Office</p> 
                        <p>Corporate Head Office: Bag X Building, 6-A Waris Road Lahore Pakistan.</p>
                        <p>Factory: 14 Km Ferozpur Road Lahore.</p>
                        <p>Business Hours: Monday to Saturday 10 am till 6 pm</p>
                    </div> 
                    <div className='rules'>
                        <p>FOR COMPLAINTS & QUERIES</p>
                        <p style={{ fontWeight: '500' }}>Write email:</p>
                        <p>CEO: ceo@bagx.pk.</p> 
                        <p>UAN: 0304-111-666-8</p>
                        <p>bagx.pk@gmail.com</p>
                        <p>WhatsApp: +92 333 4766 356</p>
                    </div>
                    <div className='rules'>
                        <img src={require("../../assets/footer_logo.png")} alt="Logo" width={115} height={120} />
                    </div>   
                </div>
                <p className='copyright' >   
                    2024 Bag.x.official all rights reserved</p>   
            </div>
        </>
    )
}
export default ScreenFooter;