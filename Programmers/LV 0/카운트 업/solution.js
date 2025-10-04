// https://school.programmers.co.kr/learn/courses/30/lessons/181920
function solution(start_num, end_num) {
    return Array(end_num - start_num + 1).fill(start_num).map((v, i) => v = v + i);
}
