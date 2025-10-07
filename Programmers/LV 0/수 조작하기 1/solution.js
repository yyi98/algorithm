function solution(n, control) {
    let oper = {"w":1, "s":-1, "d":10, "a":-10};
    return [...control].reduce((result, cur) => { return result + oper[cur] }, n);
}
