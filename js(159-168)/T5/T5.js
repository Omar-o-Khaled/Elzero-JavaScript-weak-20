let start=performance.now();
for(let i=1;i<=99999;i++){
    console.log(i)
}
let end=performance.now()

console.log(`Loop Took ${Math.trunc(end-start)} Milliseconds.`)

// "Loop Took 1921 Milliseconds."