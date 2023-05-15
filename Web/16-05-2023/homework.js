const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.(Task1)
const even_num = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(even_num (arr));

// Write a function that takes in a string and returns the string reversed.
const rev_str = function (word) {
    let resoult = "";
    for (let i = word.length - 1; i >= 0; --i) {
        resoult += word[i];
    }
    return resoult;
}
console.log (rev_str("!dlroW olleH"))
