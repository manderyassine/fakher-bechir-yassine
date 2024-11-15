/* Isolating the Last Element*/


// Function to find the last positive score by isolating the last element
function findLastPositiveByLastElement(students, n = students.length) {
    // Base case: If no more elements, return -1
    if (n === 0) {
        return -1;
    }

    // Check if the last student's score is positive
    if (students[n - 1] > 0) {
        return n; // Return the 1-based index of the last positive score
    }

    // Recursively check the next student (exclude the last element)
    return findLastPositiveByLastElement(students, n - 1);
}




/*Isolating the First Element*/


// Function to find the last positive score by isolating the first element
function findLastPositiveByFirstElement(students, index = 0) {
    // Base case: If no more elements, return -1
    if (index === students.length) {
        return -1;
    }

    // Recursively check the next student
    let rank = findLastPositiveByFirstElement(students, index + 1);

    // If no positive score found so far, check if the current score is positive
    if (rank === -1 && students[index] > 0) {
        return index + 1; // Return the 1-based index of the positive score
    }

    // Return the found rank (the last positive score)
    return rank;
}

// Example student scores
const students = [5, -3, 12, 8, 0, -1, 6];


console.log("Rank of last positive score (by last element):", findLastPositiveByLastElement(students)); // Output: 7
console.log("Rank of last positive score (by first element):", findLastPositiveByFirstElement(students)); // Output: 7





/*findLastPositiveByLastElement:
This function checks the last element in the array and returns its 1-based index if it is positive.
If the last element is not positive, it continues checking recursively through the rest of the array.


findLastPositiveByFirstElement:
This function checks each element starting from the first, but it only returns the last positive score by checking during the recursion unwind (as it returns from the deepest call).*/