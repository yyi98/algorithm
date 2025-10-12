// https://school.programmers.co.kr/learn/courses/30/lessons/181856
function solution(arr1, arr2) {
    if (arr1.length > arr2.length)
        return 1;
    else if (arr1.length < arr2.length)
        return -1;
    else {
        let result1 = arr1.reduce((acc, cur) => { return acc + cur }, 0);
        let result2 = arr2.reduce((acc, cur) => { return acc + cur }, 0);
        if (result1 > result2)
            return 1;
        else if (result1 < result2)
            return -1;
        else
            return 0;
    }
}
