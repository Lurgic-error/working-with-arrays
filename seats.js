bus_seats = []

bookedSeatsMain = [3,2,32,34,12,33]

bookedSeatsSub = [21,12,4]


for(let i = 0; i < 52; i++){
    bus_seats[i] = i + 1
}

console.log('bus_seats', bus_seats)

// let availableSeats = []
// bus_seats.forEach( element => {
//     //  console.log('element', element)
//      console.log('booked', bookedSeatsMain.indexOf(element))
//      if(!bookedSeatsMain.indexOf(element) > -1){
//          availableSeats.push(element)
//      }
// });

let availableSeats = bus_seats.filter(seat=> !bookedSeatsMain.includes(seat))

for(let i = 0; i < bus_seats.length; i++){
    let num = []
    if(bookedSeatsMain.indexOf(bus_seats[i]) > -1){
        console.log('booked seat', bus_seats[i], bookedSeatsMain.indexOf(bus_seats[i]))
        bus_seats.slice(bookedSeatsMain.indexOf(bus_seats[i]), 1)
        availableSeats.push(bookedSeatsMain.indexOf(bus_seats[i]))
        // console.log(bookedSeatsMain.indexOf(bus_seats[i]))
        // console.log(availableSeats.slice(bus_seats[bookedSeatsMain.indexOf(bus_seats[i])],1))
        console.log('num', num)
    }
}
console.log('bus_seats', bus_seats.splice(2,1))
console.log('bus_seats', bus_seats)
console.log('availableSeats', availableSeats.length)

// const date = new Date("2020-12-22")

// console.log('date', date)

// console.log(new Date("2020-12-22"))