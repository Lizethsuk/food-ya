import React from 'react';
import Grid from '../../components/Grid';
import Banner from '../../components/Banner';

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