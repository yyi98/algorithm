// https://school.programmers.co.kr/learn/courses/30/lessons/181928
function solution(num_list) {
    var answer = 0;
    let {odds, evens} = num_list.reduce(({odds, evens}, cur) => {
        cur % 2 == 0 ? evens.push(cur) : odds.push(cur);
        return {odds, evens}
    }, {odds : [], evens: []})
    return Number(odds.join('')) + Number(evens.join(''));
}
