function minimumWaitingTime(queries) {
    if (queries.length <= 1) return 0;

    queries = queries.sort((a, b) => a - b);

    let minWaitTime = 0;
    let currQueryWaiteTIme = 0;

    for (let i = 1; i < queries.length; i++) {
        const lastQuery = queries[i - 1];

        currQueryWaiteTIme += lastQuery;

        minWaitTime += currQueryWaiteTIme;
    }

    return minWaitTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
