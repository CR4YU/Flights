import React from 'react';
import './Airports.css';
import Select from 'react-select'
import icon_right from "./icon-right2.png";
import icon_search from "./icon-search.png"

class Airports extends React.Component {

    state = {
        airports: [],
        from: "",
        to: ""
    };



    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
    }

    async fetchAirports() {
        const response = await fetch('/api/airports')
        const json = await response.json()
        const airports = json.map(airport => { return {value: airport.name, label: airport.name}})
        this.setState({airports: airports})

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () => {
        this.fetchAirports()
    }

    render = () => {
        return (
            <div className="Airports">
                <div className="Airports-select">
                    {this.select('from')}
                    <img src={icon_right} className="Icon-Direction" alt="IconDirection" />
                    {this.select('to')}
                </div>
                <img src={icon_search} className="Icon-Search" alt="IconSearch" />
            </div>
        );
    }

    select = (direction) => {
        return (
            <Select
                className="Select"
                options={this.state.airports}
                onChange={(val)=> {this.handleChange({target: { name:direction, value: val.value }})}}
                placeholder="Select airport"
            />
        )
    }
}

export default Airports;