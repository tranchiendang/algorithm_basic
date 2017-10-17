function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function get_pos(left, right){
	if ((right-left) <= 0) return;
	// pick pivot value
	let pivot_in = left;
	left = left + 1;
	
	while(left < right){
		for (let i=left; i<arr.length; i++){
			if (arr[i] >= arr[pivot_in]){
				left = i; 
				break;
			}
			left = i;
		}
		
		for (let j=right; j>0; j--){
			if (arr[j] <= arr[pivot_in]){
				right = j;
				break;
			}
			right = j;
		}
		
		swap(arr, left, right);
	}
	
	if (arr[left] < arr[right]){
		swap(arr, left, right);
	}
	
	if (arr[pivot_in] > arr[right]){
		swap(arr, pivot_in, right);
	}
	return right;
}

function quick_sort(l, r){
	if ((r-l) <= 0) return;
	
	let left = l;
	let right = r;
	
	let pos = get_pos(left, right);
	quick_sort(left, pos-1);
	quick_sort(pos+1, right);
}


//let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
let arr = [14,33,10,25,46,17,27,35,10,50,14,33,10,25,46,17,27,35,10,50];
quick_sort(0, arr.length);
console.log(arr);