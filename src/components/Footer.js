import React from 'react';

const Footer = () => {
    return (
        <div className="footer-area" id="contact">
            <div className="footer-area-bg" data-stellar-background-ratio="0.6"></div>
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="footer-top section-padding text-center">

                            <div className="footer-logo">
                                <a href="#"><img src="img/main_logo.png" alt=""></img></a>
                            </div>

                            <div className="footer-address">
                                <p>20, floor, Queenslad Victoria Building. 60 california street california USA</p>
                                <p><a href="mailto:mehedidb@gmail.com">hello@dawat.com</a></p>
                                <p><a href="callto:+8800000001111">+88 000 0000 1111</a></p>
                            </div>

                            <div className="footer-social-bookmark">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-flickr"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Teams of use</a></li>
                                <li><a href="#">Privicy Policy</a></li>
                                <li><a href="#">SiteMap</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="footer-copyright">
                            <p>&copy; 2017 <a href="#">Dawat Restaurant</a> All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;