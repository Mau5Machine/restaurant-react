import React from 'react';

const InstaFeed = () => {
    return (
        <section className="gallery-area section-padding" id="gallery">
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="area-title text-center">
                            <h2>Gallery</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="instagram-feed-content text-center">
                            <div className="instagram" id="instagram"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstaFeed;