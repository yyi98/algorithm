// https://school.programmers.co.kr/learn/courses/30/lessons/120845
function solution(box, n) {
    return box.reduce((acc, cur) => { return  acc * Math.floor(cur / n) }, 1);
}
