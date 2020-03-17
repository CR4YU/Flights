import React from 'react';
import './Main.css';
import Airports from "./Airports/Airports";

class Main extends React.Component {
    render = () => {
        return (
            <div className="Main">
                <Airports />
            </div>
        );
    }
}

export default Main;