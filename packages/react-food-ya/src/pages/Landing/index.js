import React from 'react';
import Footer from '../../components/Footer/';
import Grid from '../../components/Grid';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Banner />
                <Grid />
            </div>
        )
    }
}

export default Landing;