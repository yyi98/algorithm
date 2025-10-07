// https://school.programmers.co.kr/learn/courses/30/lessons/120899
function solution(array) {
    let arr = [...array];
    arr.sort((a,b) => b-a);
    
    let maxVal = arr[0];
    return [maxVal, array.findIndex(v => v == maxVal)];
}
