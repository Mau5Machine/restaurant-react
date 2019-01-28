import React from 'react';
import Preloader from './Preloader';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import About from './About';
import Promo from './Promo';
import Menus from './Menus';
import Reservations from './Reservations';
import Team from './Team';
import Blog from './Blog';
import InstaFeed from './InstaFeed';
import Footer from './Footer';

export default class Main extends React.Component {
    state = {
        test: 'hey'
    }

    componentDidMount() {
        console.log('The app is mounted!');
    }

    render() {
        return (
            <div className="site-wrapper">
                <Preloader />
                <ScrollToTop />
                <Header />
                <About />
                <Promo />
                <Menus />
                <Reservations />
                <Team />
                <Blog />
                <InstaFeed />
                <Footer />
            </div>
        )
    }
}