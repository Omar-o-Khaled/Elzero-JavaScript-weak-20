let timeNow=new Date()
let birthTime=new Date("1999-5-3");

let time=timeNow-birthTime;
console.log(time)

let seconds=Math.trunc(time/1000)

console.log(`${seconds} seconds`)
console.log(`${Math.trunc(seconds/(60))} Min`)
console.log(`${Math.trunc(seconds/(60*60))} Hours`)
console.log(`${Math.trunc(seconds/(24*60*60))} Days`)
console.log(`${Math.trunc(seconds/(30*24*60*60))} Months`)
console.log(`${Math.trunc(seconds/(12*30*24*60*60))} Years`)