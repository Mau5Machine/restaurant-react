import React from 'react';

const About = () => {
    return (
        <section className="about-area section-padding" id="about">
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="area-title text-center">
                            <h2>Our Story</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="about-content">
                            <p><span className="big-text">M</span> enc non elit libero. Quisque massa porta ut placerat
                                lentesque non diam. Nam convallis porta rhoncus. Maecenas varius eget turpis suscipit porta
                                sapien tinc Mauris tempor libero fringilla orci vivrra faucibue fringilla orci vivrra
                                faucibus. Integer ullamcorper erat in tellus efficitur, quis porta sapien tincidunt. Nunc
                            mattis lectus sed semper semper. </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="right-about-content">
                            <p>Quisque sit amet turpis et ipsum elementum facilisis. Quisque sed placerat libero.
                                Pellentesque nec tellus sollicitudin, sollicitudin ligula non, tristique nibh Donec vitae
                                turpis sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at posuere. Aliquam
                                et fringilla augue consequat posuere sem, eu ornares viverra veleso massa at posuere.
                            Aliquam et fringilla augue</p>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="about-author-sign text-center">
                            <img src="img/about/about_sign.png" alt=""></img>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;