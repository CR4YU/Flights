import React from "react";
import {formattedDate, timeDifference, timeFromDate} from "../../utils/utils";
import icon_takeoff from "./plane-takeoff.png";
import icon_land from "./plane-land.png";


const Flight = (props) => <div className="Flight">
        <div className="Departure">
            <div className="Date">{formattedDate(props.flight.departure)}</div>
            <div className="Departure-time"><img src={icon_takeoff} className="Plane-icon-small"
                                                 alt="icon takeoff"/>{timeFromDate(props.flight.departure)}
            </div>
            <div className="Departure-airport">{props.flight.origin.name}</div>
        </div>
        <div className="Flight-path">
            <img src={icon_takeoff} className="Plane-icon" alt="icon takeoff"/>
            <div className="Flight-time">{timeDifference(props.flight.departure, props.flight.arrival)}</div>
            <img src={icon_land} className="Plane-icon" alt="icon land"/>
        </div>
        <div className="Departure">
            <div className="Date">{formattedDate(props.flight.arrival)}</div>
            <div className="Departure-time"><img src={icon_land} className="Plane-icon-small"
                                                 alt="icon land"/>{timeFromDate(props.flight.arrival)}</div>
            <div className="Departure-airport">{props.flight.destination.name}</div>
        </div>
    </div>


export default Flight;