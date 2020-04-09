import React from 'react';
import { Link } from 'react-router-dom'
import { formattedPriceFromFlight, timeDifference, formattedDate, timeFromDate } from './../../../utils/utils';
import './Flights.css'
import icon_takeoff from "./plane-takeoff.png"
import icon_land from "./plane-land.png"
import axios from "axios";

class Flights extends React.Component {

    state = {
        flights: []
    };

    constructor(props) {
        super(props);
        this.fetchFlights = this.fetchFlights.bind(this);
    }

    async fetchFlights(origin, destination) {
        const response = await axios.get(`/api/flights/find?orig=${origin}&dest=${destination}`);
        const json = response.data;
        this.setState({flights: json})
    }

    componentDidMount = () => {

    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.origin !== this.props.origin || prevProps.destination !== this.props.destination) {
            this.fetchFlights(this.props.origin, this.props.destination);
        }
    };

    render = () => {
        return (
            <div className="Flights">
                {this.state.flights.length? this.flights() : (this.props.origin && this.props.destination) ? this.noFlights() : ""}
            </div>
        );
    };


    flights = () => {
        return this.state.flights.map(flight =>
            <Link to={"/flight/" + flight.id} key={flight.id} className="Flight">
                <div className="Departure">
                    <div className="Date">{formattedDate(flight.departure)}</div>
                    <div className="Departure-time"><img src={icon_takeoff} className="Plane-icon-small" alt="icon takeoff"/>{timeFromDate(flight.departure)}</div>
                    <div className="Departure-airport">{flight.origin.name}</div>
                </div>
                <div className="Flight-path">
                    <img src={icon_takeoff} className="Plane-icon" alt="icon takeoff"/>
                    <div className="Flight-time">{timeDifference(flight.departure, flight.arrival)}</div>
                    <img src={icon_land} className="Plane-icon" alt="icon land"/>
                </div>
                <div className="Departure">
                    <div className="Date">{formattedDate(flight.arrival)}</div>
                    <div className="Departure-time"><img src={icon_land} className="Plane-icon-small" alt="icon land"/>{timeFromDate(flight.arrival)}</div>
                    <div className="Departure-airport">{flight.destination.name}</div>
                    </div>
                    <div className="Price">{formattedPriceFromFlight(flight)}</div>

            </Link>
        )
    };

    noFlights = () => {
        return <div className="No-flights">No flights have been found :(</div>
    }

}

export default Flights;