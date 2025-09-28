// https://school.programmers.co.kr/learn/courses/30/lessons/120822

// 스프레드 문법 : https://jerryjerryjerry.tistory.com/154
// join() : 배열의 모든 요소를 문자열로 결합합니다.
function solution(my_string) {
    return [...my_string].reverse().join("");
}
