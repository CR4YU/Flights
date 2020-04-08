import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Main.css';
import Finder from "./Finder/Finder"
import SelectedFlight from "./SelectedFlight/SelectedFlight";

class Main extends React.Component {

    render = () => {
        return (
            <div className="Main">
                <div className="Middle-content">
                    <Route path="/flight/:id" exact component={SelectedFlight}/>
                    <Route path="/" exact component={Finder}/>
                </div>
            </div>
        );
    }


}

export default Main;