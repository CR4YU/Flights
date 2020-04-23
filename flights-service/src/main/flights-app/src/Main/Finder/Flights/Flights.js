import React from 'react';
import { withRouter } from 'react-router-dom'
import './Flights.css'
import Flight from "./../../Flight/Flight"
import axios from "axios";

class Flights extends React.Component {

    state = {
        flights: [],
        loading: false
    };

    constructor(props) {
        super(props);
        this.fetchFlights = this.fetchFlights.bind(this);
    }

    async fetchFlights(origin, destination) {
        this.setState({loading: true});
        const response = await axios.get(`/api/flights/find?orig=${origin}&dest=${destination}`);
        const json = response.data;
        this.setState({flights: json, loading: false});
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.origin !== this.props.origin || prevProps.destination !== this.props.destination) {
            this.fetchFlights(this.props.origin, this.props.destination);
        }
    };

    render = () => {
        return (
            <div className="Flights">
                {this.state.flights.length? this.flights() : this.state.loading? "Loading" : (this.props.origin && this.props.destination) ? this.noFlights() : ""}
            </div>
        );
    };

    flightSelected = (id) => {
        this.props.history.push('/flight/' + id);
    };

    flights = () => {
        return this.state.flights.map(flight => <Flight flightSelected={this.flightSelected} key={flight.id} flight={flight} showPrice={true}/>)
    };

    noFlights = () => {
        return <div className="flights-placeholder-message">No flights have been found :(</div>
    }

}

export default withRouter(Flights);
