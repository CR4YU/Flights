import React from 'react';

class Seats extends React.Component {

    constructor(props) {
        super(props);
    }

    switchSeatColor = (event) => {
        if (event.target.classList.contains("seat-free")) {
            event.target.classList.replace("seat-free", "seat-selected")
        } else {
            event.target.classList.replace("seat-selected", "seat-free")
        }
    };

    generateRow(columns, rowNum, takenSeats) {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const row = [];

        row.push(<div className="row-number">{rowNum}</div>);
        row.push(<div className="window"/>);
        for (let i = 0; i < columns; i++) {
            const seatTaken = takenSeats.includes((rowNum) + letters[i]);
            const onClick = seatTaken? null : (event) => {this.switchSeatColor(event); this.props.handleSeatClicked(rowNum+letters[i]);};
            row.push(
                <div className={"seat " + (seatTaken? "seat-taken" : "seat-free")}
                     onClick={onClick}>
                    {letters[i]}
                </div>)
        }
        row.push(<div className="window"/>);

        return (<div className="seats-row">{row}</div>)
    }

    render() {
        const rows = [];
        const takenSeats = this.props.flight.takenSeats.split(',');

        for (let i = 0; i < this.props.flight.numSeatsRows; i++) {
            rows.push(this.generateRow(this.props.flight.numSeatsColumns, i + 1, takenSeats))
        }

        return (
            <div className="Seats">
                <h3>Select your seats</h3>
                {rows}
            </div>
        )
    }

}

export default Seats;
