import React from 'react';
import './Main.css';
import Airports from "./Airports/Airports";
import Flights from "./Flights/Flights";

class Main extends React.Component {

    state = {
        origin: '',
        destination: ''
    };

    constructor() {
        super();
        this.handleSearchFlights = this.handleSearchFlights.bind(this);
    }

    handleSearchFlights = (origin, destination) => {
        this.setState({origin: origin, destination: destination});
    };

    render = () => {
        return (
            <div className="Main">
                <div className="Left-bar"></div>
                <div className="Middle-content">
                    <Airports handleSearchFlights={this.handleSearchFlights}/>
                    <Flights origin={this.state.origin} destination={this.state.destination}/>
                </div>
                <div className="Right-bar"></div>
            </div>
        );
    }
}

export default Main;