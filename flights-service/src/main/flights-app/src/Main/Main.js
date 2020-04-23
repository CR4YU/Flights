import React from 'react';
import { Route } from "react-router-dom";
import './Main.css';
import Finder from "./Finder/Finder"
import SelectedFlight from "./SelectedFlight/SelectedFlight";
import Booking from "./Booking/Booking"

class Main extends React.Component {

    render = () => {
        return (
            <div className="Main">
                <div className="Middle-content">
                    <Route path="/flight/:id" exact component={SelectedFlight}/>
                    <Route path="/booking/:id" exact component={Booking}/>
                    <Route path="/" exact component={Finder}/>
                </div>
            </div>
        );
    }


}

export default Main;