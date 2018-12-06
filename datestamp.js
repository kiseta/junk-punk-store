var monthName = new Array(
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
)
    
var now = new Date
    
document.write("Today is " + monthName[now.getMonth()]  + " " + now.getDate() + ", " + now.getFullYear())
 