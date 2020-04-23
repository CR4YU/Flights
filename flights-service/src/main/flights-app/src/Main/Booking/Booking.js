import React from 'react';
import './Booking.css'
import Flight from './../Flight/Flight'
import axios from 'axios';

class Booking extends React.Component {

    state = {
       booking: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchBooking(this.props.match.params.id);
    }

    async fetchBooking(id) {
        const response = await axios.get(`/api/booking/${id}`);
        const json = response.data;
        this.setState({booking: json})
    }


    render = () => {
        if (this.state.booking) {
            return (
                <div className="Booking">
                    <h2>YOUR BOOKING</h2>
                    <Flight flight={this.state.booking.flight}/>
                    <h3>Main passenger</h3>
                    {this.state.booking.user.firstName} {this.state.booking.user.lastName}
                    <h3>Bundle</h3>
                    {this.state.booking.bundle}
                    <h3>Seats</h3>
                    {this.state.booking.seats}
                </div>
            );
        } else {
            return (<div>No booking</div>)
        }
    }


}

export default Booking;
