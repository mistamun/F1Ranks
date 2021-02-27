import React, {Component, Fragment} from 'react';
import {withAlert} from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };

    componentDidUpdate(prevProps) {
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
        }

        if (message !== prevProps.message) {
            if (this.props.message.deleteInput) alert.success(this.props.message.deleteInput);
            if (this.props.message.deleteAthlete) alert.success(this.props.message.deleteAthlete);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }

    render() {
        return <Fragment/>;
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
