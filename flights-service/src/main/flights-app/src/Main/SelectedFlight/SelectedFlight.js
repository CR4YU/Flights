import React from 'react';
import './SelectedFlight.css'
import Flight from './../Flight/Flight';
import Bundles from './Bundles';
import Seats from './Seats';
import Summary from './Summary';
import axios from "axios";


class SelectedFlight extends React.Component {

    state = {
        user: "jrambo",
        flight: null,
        bundle: null,
        selectedSeats: [],
        bundlePrice: 0,
        totalPrice: 0,
        continueEnabled: false
    };

    constructor(props) {
        super(props);
        this.handleSeatClicked = this.handleSeatClicked.bind(this);
        this.bundleSelected = this.bundleSelected.bind(this);
        this.bookFlight = this.bookFlight.bind(this);
    }

    componentDidMount() {
        this.fetchFlight(this.props.match.params.id);
    }

    handleSeatClicked(code) {
        this.setState(state => {
            return (state.selectedSeats.includes(code))?
                {
                    selectedSeats: state.selectedSeats.filter(s => s !== code),
                    totalPrice: (state.selectedSeats.length - 1) * state.bundlePrice,
                    continueEnabled: (state.selectedSeats.length - 1) && !!state.bundle
                } :
                {
                    selectedSeats: [...state.selectedSeats, code],
                    totalPrice: (state.selectedSeats.length + 1) * state.bundlePrice,
                    continueEnabled: !!state.bundle
                };
        });
    }

    bundleSelected(name, price) {
        this.setState(state => {
            return {bundle: name, bundlePrice: price, totalPrice: state.selectedSeats.length * price, continueEnabled: state.selectedSeats.length}}
            );
    }


    async fetchFlight(id) {
        const response = await axios.get(`/api/flights/${id}`);
        const json = response.data;
        this.setState({flight: json})
    }

    bookFlight() {
        console.log(this.props)
        axios.post(`/api/booking`, {
            user: this.state.user,
            flightId: this.state.flight.id,
            seats: this.state.selectedSeats
        }).then(res => {
            this.props.history.push('/booking/' + res.data.id)
        }).catch(err => console.log(err));
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
                    <Summary {...this.state}/>
                    <button className={"button-continue" + (this.state.continueEnabled? "" : " disabled")} disabled={!this.state.continueEnabled}  onClick={this.bookFlight}>CONTINUE</button>
                </div>
            );
        } else {
            return (<div>No Flight</div>)
        }
    }
}

export default SelectedFlight;
