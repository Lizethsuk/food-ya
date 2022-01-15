import { React, Component } from 'react';
import Button from "../Button";
import './style.scss';

class Banner extends Component {
    render() {
        return (
            <div>
                <h3>Banner</h3>
                <Button />
            </div>
        );
    }
}

export default Banner;