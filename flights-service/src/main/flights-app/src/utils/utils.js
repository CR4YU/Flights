export function timeFromDate(datetime) {
    const date = new Date(datetime);
    return date.getHours() + ':' + (date.getMinutes() < 10?'0':'') + date.getMinutes();
}

export function timeDifference(datetime1, datetime2) {
    const date1 = new Date(datetime1);
    const date2 = new Date(datetime2);
    const diff = Math.abs(date2 - date1);
    const h = Math.floor(diff/(1000*60*60));
    const m = Math.floor(diff/(1000*60)) % 60;

    return ((h === 0)? '':h + 'h')+ ' ' +((m === 0)?'': m + 'm');
}

export function formattedDate(datetime) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const date = new Date(datetime);
    return weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];
}

export function formattedPriceFromFlight(flight) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: flight.currency }).format(flight.ticketPrice)
}

export function formattedPrice(price, currency) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(price)
}