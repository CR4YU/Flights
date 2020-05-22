import React from 'react';
import axios from 'axios';
import './Airports.css';
import Select from 'react-select'

class Airports extends React.Component {

    state = {
        airports: [],
        origin: '',
        destination: ''
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchFlights = () => props.handleSearchFlights(this.state.origin, this.state.destination)
    }

    async fetchAirports() {
        const response = await axios.get('https://iwg9yzn46c.execute-api.us-east-1.amazonaws.com/test/hello');
        const json = response.data.message;
        const airports = json.map(airport => { return {value: airport.name, label: airport.name}});
        this.setState({airports: airports})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    componentDidMount = () => {
        this.fetchAirports()
    };

    render = () => {
        return (
            <div className="Airports">
                <h2>FLIGHT FINDER</h2>
                    <div className="Airports-select">
                        {this.select('origin')}
                        <span className="direction">&#x27A4;</span>
                        {this.select('destination')}
                        <button className="Button-search" onClick={this.handleSearchFlights}>SEARCH</button>
                    </div>
            </div>

        );
    };

    select = (direction) => {
        return (
            <Select
                className="Select"
                options={this.state.airports}
                onChange={(val) => {this.handleChange({target: { name:direction, value: val.value }})}}
                placeholder={direction.replace(/^\w/, c => c.toUpperCase())}
            />
        )
    }
}

export default Airports;