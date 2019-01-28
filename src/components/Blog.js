import React from 'react';

const Blog = () => {
    return (
        <section className="blog-area section-padding" id="blog">
            <div className="blog-area-bg" data-stellar-background-ratio="0.6"></div>
            <div className="container wow fadeIn">

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="area-title text-center">
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>

                <div className="row post-slider">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <div className="single-post text-center">
                            <div className="blog-post-img ">
                                <img src="img/blog/blog-3.jpg" alt=""></img>
                            </div>
                            <div className="post-details">
                                <h3><a href="single-blog.html">Recieved first day first reservation</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias itaque eaque deserunt
                                atque laborum ex ad facilis praesentium placeat tenetur.</p>
                                <p className="post-meta"><a href="#">24 February, 2017</a> - <a href="#">5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <div className="single-post text-center">
                            <div className="blog-post-img ">
                                <img src="img/blog/blog-1.jpg" alt=""></img>
                            </div>
                            <div className="post-details">
                                <h3><a href="single-blog.html">Home to get your home delevery ?</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias itaque eaque deserunt
                                atque laborum ex ad facilis praesentium placeat tenetur.</p>
                                <p className="post-meta"><a href="#">24 February, 2017</a> - <a href="#">5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <div className="single-post text-center">
                            <div className="blog-post-img ">
                                <img src="img/blog/blog-2.jpg" alt=""></img>
                            </div>
                            <div className="post-details">
                                <h3><a href="single-blog.html">Restaurant welcome day meetup</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias itaque eaque deserunt
                                atque laborum ex ad facilis praesentium placeat tenetur.</p>
                                <p className="post-meta"><a href="#">24 February, 2017</a> - <a href="#">5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;