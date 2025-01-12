
//////////////////////   task 1   ////////////////////////////

const omar = { name: "Omar", age: 22, email: "omarnofal@gmail.com" };


const string = JSON.stringify(omar);
console.log("JSON String:", string);


const Object1 = JSON.parse(string);
console.log("JSON Object:", Object1);


/////////////////////    task 2   /////////////////////////////


function countProperties(jsonObject) {
    return Object.keys(jsonObject).length;
}


const exampleObject = { name: "ahmad", age: 25, email: "ahmad@example.com" };
console.log("Number of Properties:", countProperties(exampleObject));

////////////////////    task 3   //////////////////////////////

function getBookTitles(jsonObject) {
    return jsonObject.books.map(book => book.title);
}


const books = {
    books: [
        { title: "Book A", author: "Author A", publicationDate: "2021" },
        { title: "Book B", author: "Author B", publicationDate: "2022" }
    ]
};
console.log("Book Titles:", getBookTitles(books));


///////////////////    task 4   ///////////////////////////////


function calculateAverage(jsonObject, property) {
    const values = jsonObject.items.map(item => item[property]);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
}


const students = {
    items: [
        { name: "Student A", grade: 85 },
        { name: "Student B", grade: 90 },
        { name: "Student C", grade: 78 }
    ]
};
console.log("Average Grade:", calculateAverage(students, "grade"));


//////////////////    task 5   /////////////////////////////////


function sortByProperty(jsonObject, property) {
    return jsonObject.items.sort((a, b) => a[property] - b[property]);
}


const grades = {
    items: [
        { name: "Student A", grade: 90 },
        { name: "Student B", grade: 85 },
        { name: "Student C", grade: 78 }
    ]
};
console.log("Sorted by Grade:", sortByProperty(grades, "grade"));


/////////////////    task 6   //////////////////////////////////


function getSortedCitiesByPopulation(jsonObject) {
    return jsonObject.cities
        .sort((a, b) => b.population - a.population)
        .map(city => city.name);
}


const cities = {
    cities: [
        { name: "City A", population: 500000, country: "Country A" },
        { name: "City B", population: 2000000, country: "Country B" },
        { name: "City C", population: 750000, country: "Country C" }
    ]
};
console.log("Cities Sorted by Population:", getSortedCitiesByPopulation(cities));


/////////////////    task 7   //////////////////////////////////


function calculateTotalRevenue(jsonObject) {
    return jsonObject.products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
}


const products = {
    products: [
        { name: "Laptop", price: 1000, quantity: 5 },
        { name: "Smartphone", price: 700, quantity: 10 },
        { name: "Headphones", price: 100, quantity: 20 },
        { name: "Monitor", price: 300, quantity: 7 }
    ]
};
console.log("Total Revenue:", calculateTotalRevenue(products));




