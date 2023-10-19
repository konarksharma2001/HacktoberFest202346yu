// JavaScript program to solve fractional Knapsack Problem

// Structure for an item which stores weight and
// corresponding value of Item
class Item {
	constructor(profit, weight) {
		this.profit = profit;
		this.weight = weight;
	}
}

// Comparison function to sort Item 
// according to val/weight ratio
function cmp(a, b) {
	let r1 = a.profit / a.weight;
	let r2 = b.profit / b.weight;
	return r1 > r2;
}

// Main greedy function to solve problem
function fractionalKnapsack(W, arr) {
	// Sorting Item on basis of ratio
	arr.sort(cmp);

	let finalvalue = 0.0;

	// Looping through all items
	for (let i = 0; i < arr.length; i++) {
		
		// If adding Item won't overflow, 
		// add it completely
		if (arr[i].weight <= W) {
			W -= arr[i].weight;
			finalvalue += arr[i].profit;
		}

		// If we can't add current Item, 
		// add fractional part of it
		else {
			finalvalue += arr[i].profit * (W / arr[i].weight);
			break;
		}
	}

	// Returning final value
	return finalvalue;
}

// Driver code
let W = 50;
let arr = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];

console.log(fractionalKnapsack(W, arr));

// This code is contributed by lokeshpotta20
