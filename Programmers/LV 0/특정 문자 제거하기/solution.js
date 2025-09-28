// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

/*
function solution(my_string, letter) {
    return [...my_string].filter(item => item !== letter).join("");
}

function solution(my_string, letter) {
    return my_string.split(letter).join("");
}

*/
