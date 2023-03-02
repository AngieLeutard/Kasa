import logo2 from '../../src/assets/logo2.png'
import '../style/Footer.css'
import '../style/Font.css'

function Header() {
    return (
        <div className='footer_wrapper'>
            <img src={logo2} alt='logo2' className='footer_logo' />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </div>
        
    )
}

export default Header