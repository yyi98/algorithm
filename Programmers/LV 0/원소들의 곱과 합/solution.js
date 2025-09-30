// https://school.programmers.co.kr/learn/courses/30/lessons/181929
function solution(num_list) {
    let multiply_result = num_list.reduce((acc, cur) => { return acc * cur });
    let sum_multiply_result = num_list.reduce((acc, cur) => { return acc + cur });
    return multiply_result < Math.pow(sum_multiply_result, 2) ? 1 : 0;
}
