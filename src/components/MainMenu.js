import React from 'react';

const MainMenu = () => {
    return (
        <div className="mainemenu-area" id="mainmenu-area">
            <div className="mainmenu-area-bg"></div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button className="collapsed navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-scrollspy">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#home" className="navbar-brand"><img src="img/main_logo_black.png" alt="logo"></img></a>
                        <a href="#home" className="navbar-brand white"><img src="img/main_logo.png" alt="logo"></img></a>
                    </div>
                    <div className="collapse navbar-collapse bs-example-js-navbar-scrollspy">
                        <div className="search-form-area">
                            <div className="search-form-overlay"></div>
                            <a className="search-form-trigger" href="#search-form">Search<span></span></a>
                            <div id="search-form" className="search-form">
                                <form action="">
                                    <input type="text" placeholder="Search....." />
                                </form>
                            </div>
                        </div>
                        <ul id="nav" className="nav navbar-nav">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#about">about us</a></li>
                            <li><a href="#promotion">Offer</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#team">team</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        /* End Wrapper Here */
    );



};

export default MainMenu;