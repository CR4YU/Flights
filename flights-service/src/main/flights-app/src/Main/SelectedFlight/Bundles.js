import React from 'react';
import {formattedPriceFromFlight} from "./../../utils/utils";


function Bundles(props) {
    return (
        <div className="Bundles">
            <h3>Please select your bundle</h3>
            <div className="bundles">
                <div className="bundle">
                    <div className="bundle-title">PREMIUM</div>
                    <div className="bundle-details">
                        <div className="bundle-features">
                            <ul>
                                <li>Priority boarding</li>
                                <li>Additional hand baggage</li>
                                <li>Free drinks and meal on board</li>
                                <li>Free drinks and meal on board</li>
                            </ul>
                        </div>
                        <div className="bundle-price">{formattedPriceFromFlight(props.flight)}</div>
                    </div>
                </div>
                <div className="bundle">
                    <div className="bundle-title">PLUS</div>
                    <div className="bundle-details">
                        <div className="bundle-features">
                            <ul>
                                <li>Priority boarding</li>
                                <li>Additional hand baggage</li>
                                <li>Free drinks and meal on board</li>
                            </ul>
                        </div>
                        <div className="bundle-price">{formattedPriceFromFlight(props.flight)}</div>
                    </div>
                </div>
                <div className="bundle">
                    <div className="bundle-title">BASIC</div>
                    <div className="bundle-details">
                        <div className="bundle-features">
                            <ul>
                                <li>Priority boarding</li>
                                <li>Additional hand baggage</li>
                                <li>Free drinks and meal on board</li>
                            </ul>
                        </div>
                        <div className="bundle-price">{formattedPriceFromFlight(props.flight)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bundles;