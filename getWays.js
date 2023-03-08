function getWays(n, c) {
    let ways = Array(n + 1).fill(0);
    ways[0] = 1;

    for (let i = 0; i < c.length; i++) {
        for (let j = c[i]; j <= n; j++) {//Si bien j= n J es la suma actual en la iteracion que se quiere alcanzar, y no la suma total aunque coincidan
            ways[j] += ways[j - c[i]];
        }
    }

    return ways[n];
}