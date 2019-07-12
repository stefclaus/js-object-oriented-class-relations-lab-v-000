let store = { drivers: [], passengers: [], trips:[] };

let driverId = 0;

let passengerId = 0;

let tripId = 0;


class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        // insert in the user to the store
        store.drivers.push(this);
    }
    setPassenger(passenger) {
      this.passengerID = passenger.id;
    }

    trips() {
            return store.trips.filter(
                function(trip) {
                    return trip.driverId === this.id;
                }.bind(this)
            );
        }
    passengers() {
      return this.trips().map(trip => {
        return trip.passenger();
      })
        }

}


class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);

  }
  trips() {
          return store.trips.filter(
              function(trip) {
                  return trip.passengerId === this.id;
              }.bind(this)
          );
      }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}


class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    if (driver) {
        this.driverId = driver.id;
        }
    if (passenger) {
        this.passengerId = passenger.id;
        }
    store.trips.push(this);
  }

  setDriver(driver) {
       this.driverId = driver.id;
   }

   driver() {
       return store.drivers.find(
           function(driver) {
               return driver.id === this.driverId;
           }.bind(this)
      );
    }

  setPassenger(passenger) {
    this.passengerId = passenger.id;
  }
  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}

//new Trip() - initialized with an instance of driver and an instance of passenger;
//returns a JavaScript that object has attributes id, driverId, and passengerId
//driver() - returns the driver associated with the trip
//passenger() - returns the passenger associated with the trip

//A driver has many trips, and has many passengers through trips.
//new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
//trips() - returns all of the trips that a driver has taken
//passengers() - returns all of the passengers that a driver has taken on a trip
