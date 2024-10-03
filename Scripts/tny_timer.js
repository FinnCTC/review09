"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Finn & Cameron
   Date:   10/03/24

*/

showClock();
setInterval("showClock()", 1000);

function showClock() {
   
   //set time
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   //display time
   document.getElementById("currentTime").innerHTML = 
   "<span>" + localDate + "</span><span>" + localTime + "</span>";

   //set var j4Date as next july 4th at 9 am
   var j4Date = nextJuly4(thisDay);
   j4Date = j4Date.setHours(21);

   //set time until July 4
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs  = (mins - Math.floor(mins))*60;

   //display time until July 4
   document.getElementById("dLeft").innerHTML = Math.floor(days);
   document.getElementById("hLeft").innerHTML = Math.floor(hrs);
   document.getElementById("mLeft").innerHTML = Math.floor(mins);
   document.getElementById("sLeft").innerHTML = Math.floor(secs);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}