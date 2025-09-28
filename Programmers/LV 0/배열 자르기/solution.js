// slice, splice 참고
// https://jerryjerryjerry.tistory.com/158
// slice()는 원본 배열을 변경하지 않고 일부 요소를 추출하여 새로운 배열을 반환한다. splice()는 원본 배열을 수정하여 요소를 추가하거나 삭제한다.

// https://school.programmers.co.kr/learn/courses/30/lessons/120833
function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}


