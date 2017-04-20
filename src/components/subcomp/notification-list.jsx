import React        from 'react';
import Notification from './notification';

export default class NotificationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notificationData : []
        };

        this.generateNotifications = this.generateNotifications.bind(this);
    }

    componentWillMount() {
        this.setState({
            notificationData : this.props.data || []
        });
    }

    componentWillReceiveProps(nextProps) {
        let data = [];
        const length = nextProps.data.length;
        if( length > 5) {
            data = [ ...nextProps.data.slice(0, 5)];
        } else {
            data = nextProps.data;
        }
         this.setState({
            notificationData : data
        });
    }

    closeNotification = (index) => {
        this.setState((prevState, props) => {
            const newStateData = [
                ...prevState.notificationData.slice(0, index),
                ...prevState.notificationData.slice(index + 1)
            ];

            return { notificationData : newStateData };
        }, () => {
            this.props.updateCurrentData(this.state.notificationData);
        });
    }

    generateNotifications() {
        return (
            this.state.notificationData.map((data, idx) => {
                return (
                    <Notification
                        closeNotification = {this.closeNotification}
                        key               = {`nt-${idx}`}
                        index             = {idx}
                        {...data}
                    />
                );
            })
        )
    }

    render() {
        return (
            <div className="notification-list-container">
                <div className="notification-list">
                    { this.generateNotifications() }
                </div>
            </div>
        );
    }

}


