// https://school.programmers.co.kr/learn/courses/30/lessons/120817
// reduce 함수 사용법 : https://jigeumblog.tistory.com/106
// https://jerryjerryjerry.tistory.com/156
// reduce()는 해당 요소의 값을 기반으로 배열에서 새로운 단일 값을 파생해야 할 때 유용

function solution(numbers) {
    return numbers.reduce((acc, cur) => { return acc + cur }) / numbers.length;
}

// function solution(numbers) {
//     var answer = 0;
//     for (let i=0; i<numbers.length; i++) {
//         answer += numbers[i];
//     }
//     return answer / numbers.length;
// }
