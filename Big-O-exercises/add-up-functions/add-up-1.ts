function addUpTo (n:number):number {
    let total = 0;
    for (let i = 0; i<= n; i++){
        total +=i
    }
    return total
}

let initialTimer = performance.now();
addUpTo(100000000)
let endTimer = performance.now();

console.log(`Time Elapsed: ${(endTimer - initialTimer)/1000} seconds`)

// Time complexity O(n)
