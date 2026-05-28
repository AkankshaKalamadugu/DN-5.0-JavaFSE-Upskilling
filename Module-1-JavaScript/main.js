// Welcome message in console
console.log("Welcome to the Community Portal");

// Alert when page loads
window.onload = function () {
    alert("Welcome to the Community Portal");
};
// Syntax, Data Types and Operators

const eventName = "Community Music Event";
const eventDate = "2026-06-15";

let availableSeats = 50;

// Template Literal
console.log(`Event Name: ${eventName}`);
console.log(`Event Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Seat Count Management
function registerSeat() {

    if (availableSeats > 0) {

        availableSeats--;

        console.log(
            `Registration successful. Remaining seats: ${availableSeats}`
        );

    } else {

        console.log("No seats available.");

    }
}
// Conditionals, Loops, Error Handling

const events = [
    { name: "Community Rally", seats: 20, isUpcoming: true },
    { name: "Music Event", seats: 0, isUpcoming: true },
    { name: "Food Festival", seats: 15, isUpcoming: false }
];

// Show valid events
events.forEach(event => {
    if (event.isUpcoming && event.seats > 0) {
        console.log(
            `${event.name} is available with ${event.seats} seats`
        );
    } else {
        console.log(
            `${event.name} is not available`
        );
    }
});

// Error Handling
function registerUser(eventName) {

    try {

        if (!eventName) {
            throw new Error("Invalid event name");
        }

        console.log(
            `Successfully registered for ${eventName}`
        );

    } catch (error) {

        console.log(error.message);
    }
}

// Functions, Scope, Closures

function addEvent(name, category) {

    console.log(
        `Event Added: ${name} (${category})`
    );
}

// Closure for registration tracking
function registrationTracker() {

    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;

        console.log(
            `Total Registrations: ${totalRegistrations}`
        );
    };
}
var countReg = registrationTracker();
// Objects and Prototypes
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}
Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        console.log(`${this.name} has ${this.seats} seats available.`);
    } else {
        console.log(`${this.name} is full.`);
    }
};
let eventOne = new Event("Community Sports Event", "2026-06-20", 25);
eventOne.checkAvailability();
console.log(Object.entries(eventOne));

// Arrays and Methods

let eventList = [
    { name: "Community Rally", category: "Social" },
    { name: "Tree Plantation", category: "Environment" },
    { name: "Music Event", category: "Entertainment" }
];

// Add event using push()
eventList.push({
    name: "Health Camp",
    category: "Health"
});

// Filter Environment events
let filteredEvents = eventList.filter(
    event => event.category === "Environment"
);

console.log(filteredEvents);

// Map for formatted display
let eventNames = eventList.map(
    event => `Event: ${event.name}`
);

console.log(eventNames);

// DOM Manipulation

// Change welcome heading text
let mainHeading =
    document.getElementById("mainHeader");

mainHeading.textContent =
    "Welcome to Local Community Event Portal";

// Change heading color dynamically
mainHeading.style.color =
    "darkgreen";

// Select first event card
let firstEvent =
    document.querySelector(".eventCard");

firstEvent.style.border =
    "3px solid blue";

// Task 8: Event Handling

// Button click event
function showMessage() {
    alert("Thanks for registering for the event!");
}

// Change event for event type
let eventType =
    document.getElementById("eventType");

eventType.addEventListener(
    "change",
    function () {

        console.log(
            `Selected Event: ${eventType.value}`
        );

    }
);

// Mouseover event on heading
let heading =
    document.getElementById("mainHeader");

heading.addEventListener(
    "mouseover",
    function () {

        heading.style.color = "orange";

    }
);

heading.addEventListener(
    "mouseout",
    function () {

        heading.style.color = "darkgreen";

    }
);

// Async JS, Promises, Async/Await

// Loading message
console.log("Loading events...");

// Using fetch with then() and catch()
fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")

    .then(response => response.json())

    .then(data => {

        console.log("Fetched Events:");

        data.forEach(event => {
            console.log(event.title);
        });

    })

    .catch(error => {

        console.log(
            "Error fetching events:",
            error
        );

    });
// Async / Await version
async function fetchEvents() {
    try {
        console.log(
            "Loading events using async/await..."
        );
        let response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );
        let data =
            await response.json();
        console.log(
            "Async Events:"
        );
        data.forEach(event => {
            console.log(event.title);
        });
    } catch (error) {
        console.log(
            "Fetch failed:",
            error
        );
    }
}
fetchEvents();

//  Modern JavaScript (ES6+)

// Destructuring
const communityEvent = {
    name: "Community Music Event",
    category: "Entertainment",
    seats: 40
};

const {
    name,
    category,
    seats
} = communityEvent;

console.log(
    `Event: ${name},
Category: ${category},
Seats: ${seats}`
);

// Spread operator
let oldEvents = [
    "Community Rally",
    "Food Festival"
];

let newEvents = [
    ...oldEvents,
    "Tree Plantation",
    "Health Camp"
];

console.log(newEvents);

// Default parameters
function greetUser(
    userName = "Guest"
) {

    console.log(
        `Welcome, ${userName}!`
    );
}

greetUser();
greetUser("Akanksha");

// Form Validation

function validateForm(event) {
    event.preventDefault();
    let name =
        document.getElementById("name").value;
    let email =
        document.getElementById("email").value;
    let phone =
        document.getElementById("phone").value;
    if (
        name === "" ||
        email === "" ||
        phone === ""
    ) {
        alert(
            "Please fill all required fields."
        );

        return false;
    }

    // Email validation
    if (!email.includes("@")) {

        alert(
            "Enter valid email."
        );

        return false;
    }

    // Phone validation
    if (
        phone.length !== 10 ||
        isNaN(phone)
    ) {
        alert(
            "Enter valid 10 digit phone number."
        );
        return false;
    }
    alert(
        "Registration Successful!"
        );
    submitRegistrationData();

return true;
    return true;
}

// AJAX and Fetch API

function submitRegistrationData() {

    let userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        event: document.getElementById("eventType").value
    };

    console.log("Sending registration data...");
    console.log(userData);

    setTimeout(function () {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json"
            }
        })

        .then(response => response.json())

        .then(data => {
            console.log("Registration submitted successfully.");
            console.log(data);
        })

        .catch(error => {
            console.log("Registration submission failed.");
            console.log(error);
        });

    }, 2000);
}
// Debugging and Testing

console.log(
    "Debugging started using Chrome DevTools."
);

function debugRegistration() {

    console.log(
        "Register button clicked."
    );

    console.log(
        "Name:",
        document.getElementById("name").value
    );

    console.log(
        "Email:",
        document.getElementById("email").value
    );

    console.log(
        "Event Type:",
        document.getElementById("eventType").value
    );
}

// jQuery and Frameworks

$(document).ready(function () {

    $("#registerBtn").click(function () {

        $("#gallery").fadeOut(1000);

        setTimeout(function () {

            $("#gallery").fadeIn(1000);

        }, 1000);

    });

});

console.log(
    "React and Vue help build reusable and faster UI components."
);