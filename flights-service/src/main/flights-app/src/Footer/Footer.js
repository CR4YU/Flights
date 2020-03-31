import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render = () => {
        return (
            <div className="Footer">

                <div className="Footer-upper-row">
                    2020 © EasyFlights. All rights reserved
                    <div className="Footer-links">
                        <a>General terms & conditions of carriage</a>
                        <a>Terms of Use</a>
                        <a>Privacy Policy</a>
                        <a>Cookies</a>
                        <a>Contact us</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;