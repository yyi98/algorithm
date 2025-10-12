// https://school.programmers.co.kr/learn/courses/30/lessons/181861
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
