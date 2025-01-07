function validateAtPosition(array, value, position) {
    if (position >= 0 && position < array.length) {
        return array[position] === value;
    } else {
        console.log("Position is out of bounds");
        return false;
    }
}

// Example usage:
let arr = [1, 2, 3, 4];
let value = 3;
let position = 2;

let result = validateAtPosition(arr, value, position);
console.log(result); // Output: true
