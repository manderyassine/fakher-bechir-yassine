function findElementInRange(A, a, b, low, high) {
    // Base case: no element found
    if (low > high) {
        return -1; // Return -1 if no element exists in the range
    }

    // Find the middle index
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is in the range [a, b]
    if (A[mid] >= a && A[mid] <= b) {
        return mid;
    }

    // If A[mid] < a, focus on the right half
    if (A[mid] < a) {
        return findElementInRange(A, a, b, mid + 1, high);
    }

    // If A[mid] > b, focus on the left half
    return findElementInRange(A, a, b, low, mid - 1);
}

// Wrapper function
function searchInRange(A, a, b) {
    return findElementInRange(A, a, b, 0, A.length - 1);
}

// Example usage
const A = [3, 7, 8, 43, 556];
const a = 40, b = 50;

const index = searchInRange(A, a, b);
if (index !== -1) {
    console.log(Element found at index ${index}: ${A[index]});
} else {
    console.log("No element found in the range.");
}