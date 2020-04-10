import React from 'react';

function Seats(props) {
    const rows = 10;
    const columns = 6;

    return (
        <div className="Seats">
            <h3>Select your seats</h3>
            {generateRow(6)}
        </div>
    )


}

function generateRow(columns) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const row = [];
    for (let i = 0; i < columns; i++) {
        row.push(<div className="seat">{letters[i]}</div>)
    }

    return (<div className="seats-row">{row}</div>)
}

export default Seats;