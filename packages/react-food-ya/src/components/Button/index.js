import React from 'react';
import PropTypes from "prop-types";
import './style.scss';
import { Link } from 'react-router-dom';

// class Button extends React.Component {
//     render() {
//         return (
//             <a className={this.props.info.buttonStyle} href={this.props.info.url}>
//                 {this.props.info.content}
//             </a>
//         )
//     }
// }

const Button = ({ content, url, buttonStyle }) => {

    return (
        <Link className={buttonStyle} to={url}>
            {content}
        </Link>
    )
}

Button.propTypes = {
    content: PropTypes.string,
    url: PropTypes.string,
    buttonStyle: PropTypes.string
}

Button.defaultProps = {
    content: "Press me",
    url: "https://es.reactjs.org/docs/create-a-new-react-app.html",
    buttonStyle: 'default-button'
}

export default Button;

