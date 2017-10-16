'use strict'

function binary_search(arr, x){
	let n = arr.length;
	let lower = 0;
	let upper = n;
	
	while (upper > lower) {
		let mid = lower + (upper - lower) / 2;
		
		if (arr[mid] < x) {
			lower = ++mid;
		}
		
		if (arr[mid] > x){
			upper = --mid;
		}
		
		if (arr[mid] == x){
			console.log(mid);
		}
	}
}

let arr_dist = [10,14,19,26,27,31,33,35,42,50];
binary_search(arr_dist, 33);