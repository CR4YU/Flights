export class Flight {
  constructor(public origin: string,
              public destination: string,
              public departure: string,
              public arrival: string,
              public ticketPrice: number,
              public currency: string,
              public numSeatsColumns: number,
              public numSeatsRows: number,
              public takenSeats: string
  ){}
}
