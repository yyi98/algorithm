// https://school.programmers.co.kr/learn/courses/30/lessons/120906
function solution(n) {
    return [...n.toString()].map(x => Number(x)).reduce((acc, cur) => { return acc + cur });
}
