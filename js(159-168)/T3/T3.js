// Needed Output
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let time=new Date()

time.setMonth(1,0)

console.log(time)
console.log(`Previous Month Is ${month[time.getMonth()]} And Last Day Is ${time.getDate()}`)

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"