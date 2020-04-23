import React from 'react';
import {formattedPrice} from "../../utils/utils";

const Summary = (props) =>
<div className="Summary">
    <h3>Summary</h3>
    <div className="summary-detail-row">
        <div className="summary-detail-left"> {props.selectedSeats.length} x {props.bundle}</div>
        <div className="summary-detail-right">{formattedPrice(props.totalPrice, props.flight.currency)}</div>
    </div>
</div>

export default Summary;
