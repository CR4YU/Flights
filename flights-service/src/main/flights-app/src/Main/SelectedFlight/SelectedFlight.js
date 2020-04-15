import React from 'react';
import { formattedPriceFromFlight, formattedPrice, timeDifference, formattedDate, timeFromDate } from './../../utils/utils';
import './SelectedFlight.css'
import Flight from './Flight';
import Bundles from './Bundles';
import Seats from './Seats'
import axios from "axios";


class SelectedFlight extends React.Component {

    state = {
        flight: null,
        bundle: '',
        selectedSeats: [],
        bundlePrice: 0,
        totalPrice: 0
    };

    constructor(props) {
        super(props);
        this.handleSeatClicked = this.handleSeatClicked.bind(this);
        this.bundleSelected = this.bundleSelected.bind(this);
    }

    componentDidMount() {
        this.fetchFlight(this.props.match.params.id);
    }

    handleSeatClicked(code) {
        this.setState(state => {
            if (state.selectedSeats.includes(code))
                return {
                    selectedSeats: state.selectedSeats.filter(s => s !== code),
                    totalPrice: (state.selectedSeats.length - 1) * state.bundlePrice
            };

            return {
                selectedSeats: [...state.selectedSeats, code],
                totalPrice: (state.selectedSeats.length + 1) * state.bundlePrice
            }
        });
    }

    bundleSelected(name, price) {
        this.setState(state => {
            return {bundle: name, bundlePrice: price, totalPrice: state.selectedSeats.length * price}}
            );
    }


    async fetchFlight(id) {
        const response = await axios.get(`/api/flights/${id}`);
        const json = response.data;
        this.setState({flight: json})
    }

    async bookFlight() {
        // axios.post(`/api/`)
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
                    <div className="summary">
                        <div className="summary-detail-row">
                            <div className="summary-detail-left"> {this.state.selectedSeats.length} x {this.state.bundle}</div>
                            <div className="summary-detail-right">{formattedPrice(this.state.totalPrice, flight.currency)}</div>
                        </div>
                    </div>
                    <button className="button-continue" onClick={null}>CONTINUE</button>
                </div>
            );
        } else {
            return (<div>No Flight</div>)
        }
    }
}

export default SelectedFlight;