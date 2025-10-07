// https://school.programmers.co.kr/learn/courses/30/lessons/120895
function solution(my_string, num1, num2) {
    let arr = [...my_string];
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    
    arr[num1] = str2;
    arr[num2] = str1;
    
    return arr.join("");
}
