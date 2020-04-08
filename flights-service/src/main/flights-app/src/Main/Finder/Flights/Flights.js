import React from 'react';
import { Link } from 'react-router-dom'
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

    timeFromDate(datetime) {
        const date = new Date(datetime);
        return date.getHours() + ':' + (date.getMinutes() < 10?'0':'') + date.getMinutes();
    }

    timeDifference(datetime1, datetime2) {
        const date1 = new Date(datetime1);
        const date2 = new Date(datetime2);
        const diff = Math.abs(date2 - date1);
        const h = Math.floor(diff/(1000*60*60));
        const m = Math.floor(diff/(1000*60)) % 60;

        return ((h === 0)? '':h + 'h')+ ' ' +((m === 0)?'': m + 'm');
    }

    formattedDate(datetime) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        const date = new Date(datetime);
        return weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];
    }

    formattedPriceFromFlight(flight) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: flight.currency }).format(flight.ticketPrice)
    }

    flights = () => {
        return this.state.flights.map(flight =>
            <Link to={"/flight/" + flight.id} key={flight.id} className="Flight">
                <div className="Departure">
                    <div className="Date">{this.formattedDate(flight.departure)}</div>
                    <div className="Departure-time"><img src={icon_takeoff} className="Plane-icon-small" alt="icon takeoff"/>{this.timeFromDate(flight.departure)}</div>
                    <div className="Departure-airport">{flight.origin.name}</div>
                </div>
                <div className="Flight-path">
                    <img src={icon_takeoff} className="Plane-icon" alt="icon takeoff"/>
                    <div className="Flight-time">{this.timeDifference(flight.departure, flight.arrival)}</div>
                    <img src={icon_land} className="Plane-icon" alt="icon land"/>
                </div>
                <div className="Departure">
                    <div className="Date">{this.formattedDate(flight.arrival)}</div>
                    <div className="Departure-time"><img src={icon_land} className="Plane-icon-small" alt="icon land"/>{this.timeFromDate(flight.arrival)}</div>
                    <div className="Departure-airport">{flight.destination.name}</div>
                    </div>
                    <div className="Price">{this.formattedPriceFromFlight(flight)}</div>

            </Link>
        )
    };

    noFlights = () => {
        return <div className="No-flights">No flights have been found :(</div>
    }

}

export default Flights;