const person = (name, lastname) => {
  const box = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = name;
  p1.style.color = "red";
  p1.style.textDecorationLine = "underline";

  root.append(box, p1);

  p2.style.fontSize = "50px";
  p2.style.border = "2px solid black";
  p2.textContent = lastname;

  root.append(p2);
};
person("ADI", "ZRIHEN");

// Q2
const resultsDiv = document.getElementById("search-results");
const priceInput = document.getElementById("m-price");

const products = [
    { name: "milk", price: 5, description: "this is a milk" },
    { name: "bread", price: 3, description: "this is a bread" },
    { name: "cheese", price: 7, description: "this is a cheese" },
    { name: "butter", price: 9, description: "this is a butter" },
    { name: "tomato", price: 2, description: "this is a tomato" },
  ];

function priceList() {
  resultsDiv.innerHTML = null;
  const price = Number(priceInput.value);

  products.forEach((p) => {
    if (p.price <= price) {
      const para = document.createElement("p");

      para.textContent = `${p.name} ${p.price} ${p.description}`;
      resultsDiv.append(para);
    }
  });
};

// Q3

class drive {
    constructor(user, date, kms) {
        this.user = user;
        this.date = date;
        this.kms = kms;
        } 

}
let drive1 = new drive("Eitan","8.2",25000)
let drive2 = new drive("Mishel","13.3",5000)
let drive3 = new drive("Noa","1.4",100000)

class Car {
    constructor(company,modelName){
        this.company
        this.modelName
        this.status = true;
        this.totalKilometers = 0;
        this.trips = [];

    }
    // drivesArr = [] 

    sumTotalKm(){
        this.totalKilometers = this.trips.reduce((total, trip) => total + trip.kms, 0);
    }

    addTrip(trip){
        this.trips.push(trip)
        this.sumTotalKm();
    }

}
let car1 = new Car("Rental Company", "Toyota Camry");
const drive4 = new drive("John Doe", "2024-04-26", 100);
const drive5 = new drive("Jane Smith", "2024-04-27", 150);
let car2 = new Car("Honda","Civic")
let car3 = new Car("Skoda","Octavia")
let carFree = new Car("BMW","X5")

car1.addTrip(drive1)
car1.addTrip(drive2)
car2.addTrip(drive2)
car3.addTrip(drive3)





class companyCars {
    constructor(companyName){
        this.companyName
    }
    allCarsArr = []

    addCars(cars){
        this.allCarsArr.push(Car)
    }

    highestKmCar(){
        let max = this.allCarsArr[0]
        this.allCarsArr.forEach(val=>{     
            if(max.totalKilometers < val.totalKilometers){
                max = val
            }
        })
        return max

    }
    getAvailableCars(){
        this.allCarsArr.forEach(val=>{
            if(val.status === true)console.log(val);
        })

    }
    addDrive = (manufacturer,ride) =>{
        this.allCarsArr.forEach((val)=>{
            if(val.manufacturer == manufacturer){
                val.addNewDrive(ride)
                return;
            }
        })
    }

}
let company = new companyCars("Avis")
// company.addCars(car1)
company.addCars(car2)
company.addCars(car3)
company.addCars(carFree)

















