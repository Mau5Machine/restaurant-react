import React from 'react';

const Slider = (props) => {

    return (
        <div className="slider-area">
            <div className="pogoSlider">
                <div
                    className="pogoSlider-slide"
                    data-transition="fade"
                    data-duration="1500"
                    id="slide1"
                    style={'background:url(img/slider/slide_1.jpg) no-repeat scroll 0 0 / cover'}>

                    <h2 className="pogoSlider-slide-element" data-in="slideDown" data-out="flipX" data-duration="700">Welcome
                    to</h2>
                    <h1 className="pogoSlider-slide-element" data-in="expand" data-out="flipX" data-duration="1500"><span>Dawat</span>
                        Cafe & Restaurant</h1>
                    <h3 className="pogoSlider-slide-element" data-in="slideUp" data-out="flipX" data-duration="700"><a href="#reservation-form-modal"
                        data-toggle="modal">Reservation Now</a></h3>
                </div>

                <div
                    className="pogoSlider-slide"
                    data-transition="fade"
                    id="slide2"
                    style={'background:url(img/slider/slide_2.jpg) no-repeat scroll 0 0 / cover'}>
                    <h2 className="pogoSlider-slide-element" data-in="slideDown" data-out="flipX" data-duration="700">Our
                    menus</h2>
                    <h1 className="pogoSlider-slide-element" data-in="expand" data-out="flipX" data-duration="1500">See
                    What's <span>new</span> today</h1>
                    <h3 className="pogoSlider-slide-element" data-in="slideUp" data-out="flipX" data-duration="700"><a href="#menu">Todays
                        Menu</a></h3>
                </div>

                <div
                    className="pogoSlider-slide"
                    data-transition="fade"
                    id="slide3"
                    style={'background:url(img/slider/slide_3.jpg) no-repeat scroll 0 0 / cover'}>
                    <h2 className="pogoSlider-slide-element" data-in="slideDown" data-out="flipX" data-duration="700">Get
                    ready</h2>
                    <h1 className="pogoSlider-slide-element" data-in="expand" data-out="flipX" data-duration="1500">to
                    <span>Join</span> with us</h1>
                    <h3 className="pogoSlider-slide-element" data-in="slideUp" data-out="flipX" data-duration="700"><a href="#reservation-form-modal"
                        data-toggle="modal">Book A Table</a></h3>
                </div>
            </div>
        </div>
    );
};

export default Slider;