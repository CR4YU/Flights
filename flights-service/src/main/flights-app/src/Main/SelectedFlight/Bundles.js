import React from 'react';
import {formattedPrice} from "./../../utils/utils";


class Bundles extends React.Component{

    state = {
        bundles : [
            {name: 'BASIC', features: ["Standard boarding", "Additional small hand baggage"], priceMult:1.0, price: 0},
            {name: 'PLUS', features: ["Priority boarding", "Additional medium hand baggage"], priceMult:1.5, price: 0},
            {name: 'PREMIUM', features: ["Priority boarding", "Additional big hand baggage", "Free drinks and meal on board"], priceMult:2.0, price: 0}
        ],
        current: null
    };

    constructor(props) {
        super(props);

        this.bundleSelected = this.bundleSelected.bind(this);
    }

    componentDidMount() {
        this.adjustPrices();
    }

    adjustPrices() {
        this.setState(state => {
            return {bundles: state.bundles.map(b => {return {...b, price: this.props.flight.ticketPrice * b.priceMult}})}
        });
    }

    bundleSelected(event, name, price) {
        if (this.state.current) {
            this.state.current.classList.remove("bundle-selected");
        }
        this.setState({current: event.currentTarget});
        event.currentTarget.classList.add("bundle-selected");
        this.props.bundleSelected(name, price);
    }

    render = () => (
        <div className="Bundles">
            <h3>Please select your bundle</h3>
            <div className="bundles">
                {this.state.bundles.map(b => this.bundle(b.name, b.features, b.price))}
            </div>
        </div>
    );

    bundle = (name, features, price) =>
        <div className="bundle" onClick={(event) => this.bundleSelected(event, name, price)}>
            <div className="bundle-title">{name}</div>
            <div className="bundle-details">
                <div className="bundle-features">
                    <ul>
                        {features.map(f => <li>{f}</li>)}
                    </ul>
                </div>
                <div className="bundle-price">{formattedPrice(price, this.props.flight.currency)}</div>
            </div>
        </div>

}

function setBundleSelected(event){

}


export default Bundles;