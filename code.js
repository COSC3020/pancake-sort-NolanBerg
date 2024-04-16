function flip(arr, i) {
    let start = 0;
    while (start < i) {
        [arr[i], arr[start]] = [arr[start], arr[i]];
        start++;
        i--;
    }
}

function pancakeSort(arr) {
    let curr_size = arr.length;
    while (curr_size > 1) {
        let large = 0;
        for (let i = 1; i < curr_size; i++) {
            if (arr[i] > arr[large]) {
                large = i;
            }
        }
        if (large !== curr_size - 1) {
            flip(arr, large);
            flip(arr, curr_size - 1);
        }
        curr_size--;
    }
    return arr;
}

module.exports = { pancakeSort, flip };
