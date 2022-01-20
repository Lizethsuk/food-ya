import React from 'react';
import Footer from '../../components/Footer';
import Restaurant from '../../components/Restaurant';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';

class RestaurantPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Navbar />
                <Banner />
                <Restaurant />
                <Footer />
            </div>
        )
    }
}

export default RestaurantPage;