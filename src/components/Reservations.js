import React from 'react';

const Reservations = () => {

    return (
        <section className="reservation-button-area section-padding" id="reservation-button">
            <div className="reservation-button-area-bg" data-stellar-background-ratio="0.6"></div>
            <div className="container">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="resarvation-from-button text-center wow fadeIn">
                            <h2>Book A table Now !</h2>
                            <a href="#reservation-form-modal" className="reservation-button" data-toggle="modal">Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="modal fade" id="reservation-form-modal" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">

                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title">Table Booking Reservation Form</h4>
                                    </div>

                                    <div className="modal-body">
                                        <div className="reservation-form">
                                            <form action="#" className="table-booking-form" id="reservation">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="name"><i className="fa fa-user-o"></i></label>
                                                        <input type="text" name="name" id="name" placeholder="Name..."></input>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="email"><i className="fa fa-at"></i></label>
                                                        <input type="email" name="email" id="email" placeholder="Email..."></input>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="mobile"><i className="fa fa-phone"></i></label>
                                                        <input type="text" name="mobile" id="mobile" placeholder="Mobile..."></input>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="date"><i className="fa fa-calendar"></i></label>
                                                        <input type="text" name="date" id="date" data-select="datepicker"
                                                            placeholder="Date..."></input>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="time"><i className="fa fa-clock-o"></i></label>
                                                        <input type="text" id="time" placeholder="Time..."></input>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="person"><i className="fa fa-user"></i></label>
                                                        <select name="person" id="person">
                                                            <option value="2">2 Person</option>
                                                            <option value="3">3 Person</option>
                                                            <option value="4">4 Person</option>
                                                            <option value="5">5 Person</option>
                                                            <option value="6">6 Person</option>
                                                            <option value="7">7 Person</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-sm-offset-3  col-md-offset-3  col-lg-offset-3 col-xs-12">
                                                        <button type="submit">book a table</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservations;