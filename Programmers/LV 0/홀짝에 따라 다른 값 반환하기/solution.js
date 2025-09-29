// https://school.programmers.co.kr/learn/courses/30/lessons/181935
function solution(n) {
    var answer = 0;
    let isEven = n % 2 == 0;
    let arr = Array(n).fill().map((item, idx) => { return idx + 1 });
    let arr1 = arr.filter(x => isEven ? x % 2 == 0 : x % 2 !== 0);
    return arr1.reduce((a, b) => { return isEven ? a + Math.pow(b, 2) : a + b }, 0);
}
