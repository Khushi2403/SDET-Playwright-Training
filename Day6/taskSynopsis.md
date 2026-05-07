 1. Flight Booking Data Cleaner

## Objective

To process raw flight booking strings and convert them into structured objects for frontend display.

## Steps Followed

1. Accepted an array of raw flight strings.

2. Parsed each string using `split()` to separate:
   - source city
   - destination city
   - price

3. Converted price into a number using `Number()`.

4. Validated invalid prices using `isNaN()`.

5. Created structured flight objects.

6. Filtered flights whose prices were between `$100` and `$500`.

7. Sorted flights in ascending order based on price.

8. Converted the final array into JSON format using `JSON.stringify()`.


## Key Code Snippet

const [route, rawPrice] = flight.split(":");
const [from, to] = route.split("-");

let price = Number(rawPrice);

if (isNaN(price)) {
    price = 0;
}


2. E-Commerce Discount Applicator

## Objective

To build a promo-code system that applies discounts to eligible products and updates cart details.

## Steps Followed

1. Created a callback function to check product eligibility.

2. Verified whether:
   - category was `"Electronics"`
   - price was greater than `$200`

3. Processed products using `map()`.

4. Applied a 10% discount to eligible products.

5. Added a new property `isDiscounted`.

6. Used spread operator (`...`) to copy existing product details.

7. Displayed a promotional summary using Template Literals.

8. Simulated delayed server processing using `setTimeout()`.

## Key Code Snippet


if (promoCallback(product)) {

    let discount = product.price * 0.10;

    return {
        ...product,
        price: product.price - discount,
        isDiscounted: true
    };
}

3. Movie Streaming Data Processor

## Objective

To process movie streaming data and identify top-performing movies.

## Steps Followed

1. Parsed movie strings formatted using `|`.

2. Converted raw movie data into structured objects.

3. Converted views into numbers.

4. Validated corrupted view data using `isNaN()`.

5. Filtered only:
   - `"Action"`
   - `"Sci-Fi"`
   movies with more than `5000` views.

6. Sorted movies in descending order based on views.

7. Converted final results into JSON format.

## Key Code Snippet

const filteredMovies = parsedMovies.filter(movie =>
    (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
    movie.views > 5000
);

4. Payroll Management System

## Objective

To calculate employee tax deductions and generate payroll summaries.


## Steps Followed

1. Created a callback function to determine tax rates.

2. Applied:
   - 20% tax for salaries greater than `5000`
   - 10% tax otherwise

3. Processed employee records using `map()`.

4. Calculated:
   - tax
   - net salary

5. Assigned employee status:
   - `"Premium"`
   - `"Standard"`

6. Updated employee objects with payroll details.

7. Displayed payroll summary using Template Literals.

8. Simulated processing delay using `setTimeout()`.


## Key Code Snippet

const tax = employee.salary * taxRate;

const netSalary = employee.salary - tax;

const status =
    netSalary > 4000 ? "Premium" : "Standard";


## Additional Async Processing Snippet

setTimeout(() => {
    console.log(processedEmployees);
}, 2000);
