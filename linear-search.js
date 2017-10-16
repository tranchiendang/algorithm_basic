'use strict'

function linear_search(arr, x){
	for (let i=0; i<arr.length; i++){
		if (arr[i] == x)
		{
			console.log(i);
			break;
		}
		else
		{
			continue;
		}
	}
}

let arr_dist = [10,14,19,26,27,31,33,35,42,50];
linear_search(arr_dist, 33);