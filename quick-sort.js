let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 99));
console.log(arr);

function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function get_pos(left, right){
	if (left > right) return;
	// pick pivot value
	let pivot_in = left;
	let i = left;
	let j = right;
	
	while(i <= j){
		
		while (arr[i] <= arr[pivot_in] && i <= right){
			i++;
		}
		
		while (arr[j] > arr[pivot_in] && j >= left){
			j--;
		}
		
		if (i <= j){
			swap(arr, i, j);
		}
	}
	if (arr[i] < arr[j]) swap(arr, i, j);
	
	if (arr[i] < arr[pivot_in]){
		swap(arr, pivot_in, i);
		return i;
	}
	
	swap(arr, pivot_in, j);
	return j;
}

function quick_sort(l, r){
	if (l > r) return;
	
	let left = l;
	let right = r;
	
	let pos = get_pos(left, right);
	quick_sort(left, pos-1);
	quick_sort(pos+1, right);
}

quick_sort(0, arr.length-1);
console.log(arr);