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