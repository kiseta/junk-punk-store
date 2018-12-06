var months = new Array(
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

var now = new Date(document.lastModified)

var fyear = now.getFullYear()
   if (fyear < 2000) { fyear = fyear + 100 }

document.write("<div class='footer'>")
document.write("<img src='images/drkgreenpx.gif' border='0' width='500' height='1'><br>");
document.write("&copy; Copyright 2001 JunkPunk. All rights reserved.<br>")
document.write("Last update: " + months[now.getMonth()] + " " + now.getDate() + ", " + fyear)