// Get the property descriptor of Math.PI
// The descriptor provides information about the property's configuration (e.g., writable, enumerable, configurable)
const PiDesriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(PiDesriptor); // Logs the descriptor of Math.PI, showing that its value is non-writable and cannot be changed.

// Create an object 'chocolate' with properties and a method
const chocolate = {
    type: 'swiss',       // A string property
    price: 200,          // A numeric property
    isAvailable: true,   // A boolean property

    // Method to order chocolate (currently not doing much)
    orderChocolate: function(){
        console.log('cant order chocolate');
    }
};

// Log the property descriptor of 'type' in the chocolate object
console.log(Object.getOwnPropertyDescriptor(chocolate, 'type')); 
// This shows the default descriptor values of 'type', such as writable (true), enumerable (true), and configurable (true).

// Iterate over the entries (key-value pairs) of the chocolate object
// Log only non-function properties
for (const [key, value] of Object.entries(chocolate)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);  // Logs the key and value of non-function properties
    }
}

// Modify the 'type' property descriptor of the chocolate object
Object.defineProperty(chocolate, 'type', {
    writable: false,     // Prevents the value of 'type' from being changed
    enumerable: false    // Hides the 'type' property during enumeration (loops)
});

// Log the updated property descriptor of 'type'
console.log(Object.getOwnPropertyDescriptor(chocolate, 'type'));
// Now, 'type' is non-writable and non-enumerable. It can't be modified or listed in loops.

// Iterate over the chocolate object again after modification
for (const [key, value] of Object.entries(chocolate)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        // 'type' will no longer appear here, as it's now non-enumerable.
    }
}