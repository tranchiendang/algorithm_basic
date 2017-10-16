function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function insertion_sort(arr){
	let start = 0;
	let len = arr.length;
	
	for (let i =1; i<len; i++){
		insertion_val = arr[i];
		start = i;
		
		for (let j = start; j >= 0; j--){
			if (arr[j-1] > insertion_val)
				swap(arr, j, j-1);
		}
	}
	console.log(arr);
}

let arr_dist = [14,33,10,25,46,17,27,35,10,50];
insertion_sort(arr_dist);