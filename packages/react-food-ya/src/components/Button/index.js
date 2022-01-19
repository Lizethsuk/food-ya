import React from 'react';
import { VscPassFilled } from "react-icons/vsc";
import PropTypes from "prop-types";
import './style.scss';

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
        <a className={buttonStyle} href={url}>
            {content}
        </a>
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

