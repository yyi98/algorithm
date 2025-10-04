// https://school.programmers.co.kr/learn/courses/30/lessons/181888
function solution(num_list, n) {
    return num_list.filter((v, i) => i % n == 0);
}
