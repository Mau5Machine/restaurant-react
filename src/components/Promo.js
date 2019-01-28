import React from 'react';

const Promo = () => {
    return (
        <section className="promotions-area section-padding" id="promotion">
            <div className="promotion-area-bg" data-stellar-background-ratio="0.6"></div>
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="area-title text-center">
                            <h2>Special Package</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="menu-discount-offer col-md-12 col-lg-12 col-sm-12 col-xs-12">

                        <div className="single-promotions">
                            <div className="promotions-img">
                                <img src="img/promotions/promo_slide_1.jpg" alt=""></img>
                            </div>

                            <div className="promotions-details">
                                <h3>40% off for 9'' - 12'' pizza - Wed, Thu, Friday only</h3>
                                <p>Pizza 12 inch + 1 Side Dish + 1,5L Coke Bottle Only From 209,000</p>
                                <a href="#" className="read-more">Order now</a>
                            </div>
                        </div>

                        <div className="single-promotions">
                            <div className="promotions-img">
                                <img src="img/promotions/promo_slide_2.jpg" alt=""></img>
                            </div>

                            <div className="promotions-details">
                                <h3>40% off for 9'' - 12'' pizza - Wed, Thu, Friday only</h3>
                                <p>Pizza 12 inch + 1 Side Dish + 1,5L Coke Bottle Only From 209,000</p>
                                <a href="#" className="read-more">Order now</a>
                            </div>
                        </div>

                        <div className="single-promotions">
                            <div className="promotions-img">
                                <img src="img/promotions/promo_slide_3.jpg" alt=""></img>
                            </div>
                            <div className="promotions-details">
                                <h3>40% off for 9'' - 12'' pizza - Wed, Thu, Friday only</h3>
                                <p>Pizza 12 inch + 1 Side Dish + 1,5L Coke Bottle Only From 209,000</p>
                                <a href="#" className="read-more">Order now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;