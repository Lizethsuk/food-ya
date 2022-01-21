import React from 'react';
import './style.scss';
import Register from '../../components/Register';


class RegisterPage extends React.Component {
    render() {
        return (
            <div className="register-page">
                <Register />
            </div>
        )
    }
}

export default RegisterPage;