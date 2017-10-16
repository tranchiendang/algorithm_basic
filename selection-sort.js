function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function selection_sort(arr){
	let n = arr.length;
	
	for (let i = 0; i < n; i++){
		let min = i;
		for (j = i + 1; j < n; j++){
			if (arr[j] < arr[min]){
				min = j;
			}
		}
		
		if (arr[i] > arr[min]){
			swap(arr, i, min);
		}
	}
	
	console.log(arr);
}

let arr_dist = [14,33,10,25,46,17,27,35,10,50];
selection_sort(arr_dist);