import React from 'react';
import './Finder.css'
import Airports from "./Airports/Airports";
import Flights from "./Flights/Flights";

class Finder extends React.Component {

    state = {
        origin: '',
        destination: ''
    };

    constructor(props) {
        super(props);
        this.handleSearchFlights = this.handleSearchFlights.bind(this);
    }

    handleSearchFlights = (origin, destination) => {
        this.setState({origin: origin, destination: destination});
    };

    render = () => {
        return (
            <div className="Finder">
                <Airports handleSearchFlights={this.handleSearchFlights}/>
                <Flights {...this.state}/>
            </div>
        );
    }
}

export default Finder;
