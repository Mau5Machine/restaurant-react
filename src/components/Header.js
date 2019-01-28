import React from 'react';
import MainMenu from './MainMenu';
import Slider from './Slider';

const Header = () => {

    return (
        <header className="top-area" id="home">
            <div className="header-top-area">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 col-sm-8">
                                <div className="call-to-action">
                                    <p><i className="fa fa-envelope-o"></i>Email: <a href="#">info@restaurant.com</a></p>
                                    <p><i className="fa fa-phone"></i>Telephone: <a href="#">+1 800 234 5678</a></p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-6 col-sm-4">
                                <div className="book-table-popup">
                                    <a href="#reservation-form-modal" data-toggle="modal">Book a table</a>
                                </div>
                                <div className="top-social-bookmark">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fa fa-feed"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MainMenu />
            </div>
        </header >

    );
};

export default Header;