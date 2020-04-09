import React from 'react';
import { formattedPriceFromFlight, timeDifference, formattedDate, timeFromDate } from './../../utils/utils';
import './SelectedFlight.css'
import axios from "axios";
import icon_takeoff from "../Finder/Flights/plane-takeoff.png";
import icon_land from "../Finder/Flights/plane-land.png";
import {Link} from "react-router-dom";

class SelectedFlight extends React.Component {

    state = {
        flight: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchFlight(this.props.match.params.id);
    }

    async fetchFlight(id) {
        const response = await axios.get(`/api/flights/${id}`);
        const json = response.data;
        console.log(json);
        this.setState({flight: json})
    }

    render = () => {
        const flight = this.state.flight;
        console.log(flight);
        if(flight) {
            return (
                <div className="Selected-flight">
                    <h2>YOUR FLIGHT TO LONDON</h2>
                    <div className="Flight">
                        <div className="Departure">
                            <div className="Date">{formattedDate(flight.departure)}</div>
                            <div className="Departure-time"><img src={icon_takeoff} className="Plane-icon-small"
                                                                 alt="icon takeoff"/>{timeFromDate(flight.departure)}
                            </div>
                            <div className="Departure-airport">{flight.origin.name}</div>
                        </div>
                        <div className="Flight-path">
                            <img src={icon_takeoff} className="Plane-icon" alt="icon takeoff"/>
                            <div className="Flight-time">{timeDifference(flight.departure, flight.arrival)}</div>
                            <img src={icon_land} className="Plane-icon" alt="icon land"/>
                        </div>
                        <div className="Departure">
                            <div className="Date">{formattedDate(flight.arrival)}</div>
                            <div className="Departure-time"><img src={icon_land} className="Plane-icon-small"
                                                                 alt="icon land"/>{timeFromDate(flight.arrival)}</div>
                            <div className="Departure-airport">{flight.destination.name}</div>
                        </div>
                    </div>





                    <div className="bundles">
                        <div className="bundle">
                            <span className="bundle-title">PREMIUM</span>
                            <div className="bundle-details">
                                <div className="bundle-features">
                                    <ul>
                                        <li>Priority boarding</li>
                                        <li>Additional hand baggage</li>
                                        <li>Free drinks and meal on board</li>
                                    </ul>
                                </div>
                                <span className="bundle-price"> EUR 10.00</span>
                            </div>
                        </div>
                        <div className="bundle">
                            <span className="bundle-title">PLUS</span>
                            <div className="bundle-details">
                                <div className="bundle-features">
                                    <ul>
                                        <li>Priority boarding</li>
                                        <li>Additional hand baggage</li>
                                        <li>Free drinks and meal on board</li>
                                    </ul>
                                </div>
                                <span className="bundle-price"> EUR 10.00</span>
                            </div>
                        </div>
                        <div className="bundle">
                            <span className="bundle-title">BASIC</span>
                            <div className="bundle-details">
                                <div className="bundle-features">
                                    <ul>
                                        <li>Priority boarding</li>
                                        <li>Additional hand baggage</li>
                                        <li>Free drinks and meal on board</li>
                                    </ul>
                                </div>
                                <span className="bundle-price"> EUR 10.00</span>
                            </div>
                        </div>
                    </div>


                </div>
            );
        } else {
            return (<div>No Flight</div>)
        }
    }
}

export default SelectedFlight;