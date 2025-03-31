// Task 2: Fetch Products with .then()
const apiLink = 'https://www.course-api.com/javascript-store-products';

function fetchProductsThen() {
    fetch (apiLink)
    .then(response => {
        if (!response.ok) {
            throw new Error('The Network is Down!');
    }
        return response.json();
})

.then(products => {
    products.forEach(product => {
        console.log(product.fields.name);
    });
}) // Created a new function to fetch the data and log the product names.

.catch(error => {
    console.error('A Problem Has Occured: ', error);
    }); // Added .catch to handle any errors.
}

fetchProductsThen();

// Task 3: Fetch Products with Async/Await
async function fetchProductsAsync() {
    try {
        const response = await fetch(apiLink);
        if (!response.ok) {
            throw new Error('The Network is Down!');
        }
        const products = await response.json();
        displayProducts(products);
    } 
    
    catch (error) {
        handleError(error);
    }
} // Created a function that fetches the data using async/await and handles the errors.

function displayProducts(products) {
    products.forEach(product => {
        console.log(product.fields.name);
})}; // Created a function to display products names.
