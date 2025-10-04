// https://school.programmers.co.kr/learn/courses/30/lessons/181928
function solution(num_list) {
    let {odds, evens} = num_list.reduce(({odds, evens}, cur) => {
        if (cur % 2 == 0)
            evens.push(cur);
        else
            odds.push(cur);
        return {odds, evens}
    }, {odds: [], evens:[]});
    return Number(odds.join("")) + Number(evens.join(""));
}
