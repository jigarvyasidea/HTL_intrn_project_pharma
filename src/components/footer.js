import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <FooterContainer className="mainfooter" id="footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <ul className="list-styled">
                            <li>Home</li>
                            <li >About Us</li>
                            <li>Our Products</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>GLOBAL PRESENSE</h4>
                        <ul className="list-styled">
                            <li>Tajikistan</li>
                            <li>Russia</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-styled">
                            <li>Yesha Pharmaceutical</li>
                            <li>Shop NO. A-52,Neminath Shopping Mall</li>
                            <li>Opp. Tehsil Sagwara, Dungarpur,Rajasthan</li>
                            <li><a href="https://wa.me/+918529599068" className="linkcolor" >Whatsapp - 8529599068  (Click here to chat with us)</a></li>                           
                        </ul>
                    </div>  
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        Yesha Pharmaceutical 2021 | Developed by <a href="https://www.hughtechnolabs.com/">Jigar Vyas </a>

                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        padding-top:3rem;
        color : var(--mainWhite); 
    }

    .mainfooter{
        padding-top:10px;
    }

    .footer-bottom{
        padding-top:3rem;
        padding-bottom: 2rem;
    }

`;
