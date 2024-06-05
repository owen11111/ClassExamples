const objEx = {
    name: "Owen", 
    age: 26, 
    role: "Lecturer",
    results: [78,88,95,75]    
}

console.log(objEx)
console.log(objEx.name)
console.log(objEx.age)
console.log(objEx.role)
console.log(objEx.results)

class Staff{
    constructor(name, age, role){
        this.name = name;
        if (age > 18){
            this.age = age;
        }else{
            throw new Error("Age Must Be Higher Than 18");
        }
        this.role = role;
    }
}
let owen = new Staff("Owen", 26, "Lecturer")
let gav = new Staff("Gavin", 33, "Program Lead")

class Car{
    constructor(model, engine, fuel_capacity, max_speed){
        this.model = model;
        this.engine = engine;
        this.fuel_capacity = fuel_capacity;
        this.current_fuel = fuel_capacity;
        this.max_speed = max_speed;
        this.current_speed = max_speed;
        this.distance_travelled = 0;
    }

    drive(hours){
        for(let i=0; i<hours; i++){
            this.distance_travelled += this.current_speed;
            this.current_fuel--
        }
        console.log(`This car has travelled ${this.distance_travelled} miles and has used up ${this.fuel_capacity - this.current_fuel}/${this.fuel_capacity} units of fuel`)
    }
}

let jims_car = new Car("Test", "V8", 5, 90)
jims_car.drive(3)
jims_car.drive(1)

class Fleet{
    constructor(cars){
        this.cars = cars
    }

    total_dist(){
        let totalDist = 0;
        for (let car of this.cars){
            totalDist += car.distance_travelled
        }
        console.log(`This fleet has driven ${totalDist} miles in total`)
    }
}

let car1 = new Car("Model1", "V8", 8, 40)
let car2 = new Car("Model2", "V8", 6, 50)
let car3 = new Car("Model3", "V8", 2, 100)
let car4 = new Car("Model4", "V8", 4, 70)

car1.drive(2)
car2.drive(4)
car3.drive(2)
car4.drive(2)

let fleet1 = new Fleet([car1, car2, car3, car4, jims_car])
fleet1.total_dist()
car2.drive(2)
fleet1.total_dist()
