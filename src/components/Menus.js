import React from 'react';

const Menus = () => {
    return (
        <section className="menus-area section-padding" id="menu">
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="area-title text-center">
                            <h2>Today’s menu</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="food-menu-list-menu">
                            <ul>
                                <li className="filter active" data-filter="all">All</li>
                                <li className="filter" data-filter=".breakfast">Breakfast</li>
                                <li className="filter" data-filter=".lunch">Lunch</li>
                                <li className="filter" data-filter=".dinner">Dinner</li>
                                <li className="filter" data-filter=".coffee">Coffe</li>
                                <li className="filter" data-filter=".snacks">Snacks</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row food-menu-list">
                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu breakfast coffee snacks">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_1.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu dinner snacks">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_2.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$22.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu breakfast">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_3.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$17.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu dinner lunch breakfast snacks">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_4.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$28.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu lunch coffee">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_5.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$120.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu breakfast">
                        <div className="single-menu-details">
                            <div className="food-menu-img"><img src="img/menu/menu_6.jpg" alt=""></img></div>
                            <div className="food-menu-details">
                                <h3>Cupcake Recipes <span className="menu-price">$100.00</span></h3>
                                <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>-
                                    Cherry</span></p>
                                <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                                <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Menus;