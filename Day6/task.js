//------------------------------QUESTION 1 -The Flight Booking Data Cleaner-------------------------------------------------------------------

// const rawFlights = [
//  "London-Paris:150",
//  "New York-Tokyo:invalid",
//  "Dubai-Mumbai:450",
//  "Berlin-Rome:95"
// ];

// function flightDetails(flights){

//     const parsedFlights = flights.map((flight) => {

//         const [place, price] = flight.split(":");

//         const [from, to] = place.split("-");

//         let NumPrice = Number(price);

        
//         if (isNaN(NumPrice)) {
//             NumPrice = 0;
//         }

//         return {
//             from: from,
//             to: to,
//             price: NumPrice
//         };

//     });

    
//     const filteredFlights = parsedFlights.filter(flight => {
//         return flight.price >= 100 && flight.price <= 500;
//     });

  
//     filteredFlights.sort((a, b) => a.price - b.price);

    
//     return JSON.stringify(filteredFlights, null, 2);

// }

// const out = flightDetails(rawFlights);

// console.log(out);


//-----------------------------------------Question 2: The E-Commerce Discount Applicator----------------------------

// const cart = [
//  { name: "Smartphone", price: 800, category: "Electronics" },
//  { name: "Toaster", price: 50, category: "Home" },
//  { name: "Headphones", price: 250, category: "Electronics" },
//  { name: "Monitor", price: 150, category: "Electronics" }
// ];

// function isEligible(product){
//     return product.category==="Electronics" && product.price>200;

// }

// function applyPromo(cart,promoCallback){


//     let discountedCount = 0;
//     let totalSavings = 0;

    
//     const updatedCart = cart.map(product => {
//         if(promoCallback(product)){
//              let discount = product.price * 0.10;
//              discountedCount++;
//              totalSavings+=discount;
//              return {
//                 ...product,
//                 price: product.price - discount,
//                 isDiscounted: true
//             };
//         }

//         return{
//             ...product,
//               isDiscounted: false
//         };
//         });

//         console.log(
//         `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`
//     );

   
//     setTimeout(() => {
//         console.log(updatedCart);
//     }, 1000);
// }

// applyPromo(cart, isEligible);

//---------------------------------------- Question 3: The Movie Stream Analytics---------------------------------------

// const rawMovies = [
//     "Inception|Sci-Fi|12000",
//     "The Lion King|Animation|8000",
//     "Mad Max|Action|invalid",
//     "The Matrix|Sci-Fi|15000",
//     "Gladiator|Action|4500"
// ];

// function processMovies(movies) {

   
//     const parsedMovies = movies.map(movie => {

       
//         const [name, genre, rawViews] = movie.split("|");

       
//         let views = Number(rawViews);

//         if (isNaN(views)) {
//             views = 0;
//         }

      
//         return {
//             name: name,
//             genre: genre,
//             views: views
//         };
//     });

   
//     const filteredMovies = parsedMovies.filter(movie =>
//         (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
//         movie.views > 5000
//     );

//     filteredMovies.sort((a, b) => b.views - a.views);

//     return JSON.stringify(filteredMovies, null, 2);
// }

// const result = processMovies(rawMovies);

// console.log(result);

//--------------------------------------Question 4: The Automated Payroll Processor-----------------------------

const employees = [
 { id: 101, name: "Alice", salary: 6000 },
 { id: 102, name: "Bob", salary: 3500 },
 { id: 103, name: "Charlie", salary: 5200 }
];


function taxLogic(salary) {

    if (salary > 5000) {
        return 0.20;
    }

    return 0.10;
}

function calculatePayroll(employees, taxCallback) {

    let totalNetPayout = 0;

    
    const processedEmployees = employees.map(employee => {

      
        const taxRate = taxCallback(employee.salary);

        const tax = employee.salary * taxRate;

      
        const netSalary = employee.salary - tax;

        
        totalNetPayout += netSalary;

        const status = netSalary > 4000 ? "Premium" : "Standard";

      
        return {
            ...employee,
            tax: tax,
            netSalary: netSalary,
            status: status
        };
    });

   
    console.log(
        `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
    );

  
    setTimeout(() => {
        console.log(processedEmployees);
    }, 2000);
}

calculatePayroll(employees, taxLogic);
