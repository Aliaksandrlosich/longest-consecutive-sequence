module.exports = function longestConsecutiveLength(array) {
   if (array.length == 0) return 0;
     let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = "number";
    }
     let count = 1;
    let value = 1;
    for (let key in obj) {
        if (obj[key - 1]) {
            value++;
            continue;
        }
        if (value == 1) continue;
        count = Math.max(count, value);
        value = 1;
    }
    return count;
}

