import React from 'react';
import { formattedPriceFromFlight, timeDifference, formattedDate, timeFromDate } from './../../utils/utils';
import './SelectedFlight.css'
import Flight from './Flight';
import Bundles from './Bundles';
import Seats from './Seats'
import axios from "axios";


class SelectedFlight extends React.Component {

    state = {
        flight: null,
        bundle: '',
        selectedSeats: []
    };

    constructor(props) {
        super(props);
        this.handleSeatClicked = this.handleSeatClicked.bind(this);
    }

    componentDidMount() {
        this.fetchFlight(this.props.match.params.id);
    }

    handleSeatClicked(code) {
        this.setState(state => {
            if (state.selectedSeats.includes(code))
                return {selectedSeats: state.selectedSeats.filter(s => s !== code)};

            return {selectedSeats: [...state.selectedSeats, code]}
        });
    }

    bundleSelected(name, price) {

    }


    async fetchFlight(id) {
        const response = await axios.get(`/api/flights/${id}`);
        const json = response.data;
        this.setState({flight: json})
    }

    render = () => {
        const flight = this.state.flight;
        if (flight) {
            return (
                <div className="Selected-flight">
                    <h2>YOUR FLIGHT TO {flight.destination.city.toUpperCase()}</h2>
                    <Flight flight={flight}/>
                    <Bundles flight={flight} bundleSelected={this.bundleSelected}/>
                    <Seats flight={flight} handleSeatClicked={this.handleSeatClicked}/>
                    <h3>Summary</h3>
                </div>
            );
        } else {
            return (<div>No Flight</div>)
        }
    }
}

export default SelectedFlight;