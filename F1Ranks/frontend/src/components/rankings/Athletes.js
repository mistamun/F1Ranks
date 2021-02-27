import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAthletes, deleteAthlete } from "../../actions/athletes";

export class Athletes extends Component {
    static propTypes = {
        athletes: PropTypes.array.isRequired,
        getAthletes: PropTypes.func.isRequired,
        deleteAthlete: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getAthletes();
    }

    render() {
        return (
            <Fragment>
                <h2>Athletes</h2>
                <table className={"table table-striped"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.athletes.map(athlete => (
                        <tr key={athlete.id}>
                            <td>{athlete.id}</td>
                            <td>{athlete.name}</td>
                            <td><button onClick={this.props.deleteAthlete.bind(this, athlete.id)}
                                        className={"btn btn-danger btn-sm"}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    athletes: state.athletes.athletes
});

export default connect(mapStateToProps, { getAthletes, deleteAthlete })(Athletes);