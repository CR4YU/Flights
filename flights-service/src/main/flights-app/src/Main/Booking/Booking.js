import React from "react";
import "./Booking.css"
import axios from "axios";

class Booking extends React.Component {

    state = {
       booking: null
    };

    async fetchBooking(id) {
        const response = await axios.get(`/api/booking/${id}`);
        const json = response.data;
        this.setState({booking: json})
    }


    render = () =>
        <div className="Booking">
        <h2>YOUR BOOKING</h2>
        </div>


}

export default Booking;