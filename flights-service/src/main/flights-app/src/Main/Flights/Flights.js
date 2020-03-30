import React from 'react';
import './Flights.css'
import icon_takeoff from "./plane-takeoff.png"
import icon_land from "./plane-land.png"

class Flights extends React.Component {

    state = {
        origin: '',
        destination: '',
        flights: []
    };


    constructor(props) {
        super(props);
        this.fetchFlights = this.fetchFlights.bind(this);
    }

    async fetchFlights(origin, destination) {
        const response = await fetch(`/api/flights/find?orig=${origin}&dest=${destination}`);
        const json = await response.json();
        this.setState({flights: json})
    }

    componentDidMount = () => {

    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps.origin !== this.props.origin || prevProps.destination !== this.props.destination) {
            this.fetchFlights(this.props.origin, this.props.destination);
        }
    };

    render = () => {
        return (
            <div className="Flights">
                {this.flights()}
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
        const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes());
        const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes());
        const diff = Math.abs(date2 - date1);
        const h = Math.floor(diff/(1000*60*60));

        const m = Math.floor(diff/(1000*60)) % 60;

        return ((h == 0)? '':h + 'h')+ ' ' +((m == 0)?'': m + 'm');
    }

    formattedDate(datetime) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const date = new Date(datetime);
        return date.getDate() + ' ' + monthNames[date.getMonth()];
    }

    flights = () => {
        return this.state.flights.map(flight =>
            <div className="Flight">
                <div className="Date">{this.formattedDate(flight.departure)}</div>
                <div className="Departure">
                    <div className="Departure-time">{this.timeFromDate(flight.departure)}</div>
                    <div className="Departure-airport">{flight.origin.name}</div>
                </div>
                <img src={icon_takeoff} className="Plane-icon" alt="icon takeoff"/>
                <div className="Flight-time">{this.timeDifference(flight.departure, flight.arrival)}</div>
                <img src={icon_land} className="Plane-icon" alt="icon land"/>
                <div className="Departure">
                    <div className="Departure-time">{this.timeFromDate(flight.arrival)}</div>
                    <div className="Departure-airport">{flight.destination.name}</div>
                </div>
            </div>
        )
    }

}

export default Flights;