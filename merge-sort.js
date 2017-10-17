function swap(arr, i, j){
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function merge(l_arr, r_arr){
	let res_arr = [];
	
	while (l_arr.length > 0 && r_arr.length > 0){
		let i = 0;
		let j = 0;
		
		if (l_arr[i] < r_arr[j]){
			res_arr.push(l_arr[i]);
			l_arr.splice(i, 1);
		}
		else {
			res_arr.push(r_arr[j]);
			r_arr.splice(j, 1);
		} 
		
	}
	
	for (let i = 0; i < l_arr.length; i++){
		res_arr.push(l_arr[i]);
	}
	
	for (let i = 0; i < r_arr.length; i++){
		res_arr.push(r_arr[i]);
	}
	
	return res_arr;
}

function merge_sort(arr){
	let n = arr.length;
	
	if (n == 1)
		return arr;
	
	let l_arr = arr.slice(0, n/2);
	let r_arr = arr.slice(n/2);
	let l = merge_sort(l_arr);
	let r = merge_sort(r_arr);
	
	console.log("---------");
	console.log(`left: ${l_arr}`);
	console.log(`right: ${r_arr}`);
	
	return merge(l, r);
}

let arr_dist = Array.from({length: 100}, () => Math.floor(Math.random() * 999));
console.log(`unsorted arr: ${arr_dist}`);
console.log(merge_sort(arr_dist));
