import React     from 'react';
import PropTypes from 'prop-types';
import Utlis     from '../utils/utils';

export default class Notification extends React.Component {

    constructor(props) {
        super(props);

        this.getNotificationBasedOnType = this.getNotificationBasedOnType.bind(this);
    }

    closeNotification = () => {
        this.props.closeNotification(this.props.index);

    }

    getNotificationBasedOnType() {

        const { type, content, title, index} = this.props;
        const iconName = Utlis.iconMap[type];

        return (
            <div className={`notify-${type}`}>
                <h3 className="heading">
                    <i className="material-icons md-36">{iconName}</i>
                    <span className="title">{title}</span>
                    <i className="material-icons close" onClick={this.closeNotification}>clear</i>
                </h3>
                <hr />
                <p className="content">
                    {content}
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className="notification-container">
                {this.getNotificationBasedOnType()}
            </div>
        );
    }
}

Notification.propType = {
    type : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired
};
