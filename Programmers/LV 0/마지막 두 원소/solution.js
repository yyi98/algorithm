// https://school.programmers.co.kr/learn/courses/30/lessons/181927
function solution(num_list) {
    let [a, b] = num_list.slice(-2);
    b > a ? num_list.push(b - a) : num_list.push(b * 2);
    return num_list;
}
