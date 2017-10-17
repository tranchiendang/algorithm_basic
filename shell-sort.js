// h = h * 3 + 1
// h is interval with initial value at 1

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
}

function shell_sort(arr){
	let h = 1 * 3 + 1;
	while (h > 0){
		let index_pick = [];
		console.log(h);
		for (let i = 0; i < arr.length / 2; i++ ){
			let tmp_arr = [];
			if (index_pick.includes(i) == false){
				tmp_arr.push(arr[i]);
				index_pick.push(i);
			} else {
				continue;
			}
			let m_pos = i + h;
			while (m_pos < arr.length){
				if (index_pick.includes(m_pos) == false) {
					tmp_arr.push(arr[m_pos]);
					index_pick.push(m_pos);
					m_pos = m_pos + h;
				} else{
					break;
				}
			};
			insertion_sort(tmp_arr);
			console.log(tmp_arr);
		};
		h = h - 1;
		
		console.log("---------------");
	}
}


let arr_dist = Array.from({length: 20}, () => Math.floor(Math.random() * 99));
shell_sort(arr_dist);