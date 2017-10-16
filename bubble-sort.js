function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function bubble_sort(arr){
	let n = arr.length;
	
	for (let i=0; i < n; i++){
		for (let j = 0; j < n-i; j++){
			if (arr[j] > arr[j+1]){
				swap(arr, j, j+1);
			}
		}
	}
	console.log(arr);
}

let arr_dist = [14,33,10,25,46,17,27,35,10,50];
bubble_sort(arr_dist);