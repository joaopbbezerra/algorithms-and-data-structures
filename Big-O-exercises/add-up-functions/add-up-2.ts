function addUpTo(n: number): number {
    return n*(n+1)/2
}

let initialTimer = performance.now();
addUpTo(100000000)
let endTimer = performance.now();

console.log(`Time Elapsed: ${(endTimer - initialTimer)/1000} seconds`)

// Time complexity O(1)
