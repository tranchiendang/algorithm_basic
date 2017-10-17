function interpolation_search(arr, x){
	let n = arr.length;
	let lower = 0, mid = -1, higher = n -1;
	
	while(true){
		if ((lower == higher) || (arr[lower] == arr[higher])){
			console.log('not found');
			break;
		}
		
		mid = parseInt(lower + ((higher-lower) / (arr[higher] - arr[lower])) * (x - arr[lower]));
		if (arr[mid] == x){
			console.log(mid);
			break;
		} else {
			if (arr[mid] < x)
				lower = mid + 1;
			else if (arr[mid] > x)
				higher = higher + 1;
		}
	}
}

let arr_dist = Array.from({length: 20}, () => Math.floor(Math.random() * 99));
interpolation_search(arr_dist, 33);