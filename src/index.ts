class SeatAssignment {
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Taufan";
seats["A2"] = "Ahmad";
console.log(seats);
