var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
     min: 23,
     max: 65,
     avg: 6.3,
     cookiesArray: [],
     generateRandom: function() {
         var range = this.max - this.min;
         var randomNumber = Math.floor(Math.random() * range) + this.min;
         return randomNumber;
     },
// -------------------------------------- //
      
        amountOfCookiesPerHourFunction: function() {
            for (i = 0; i < 15; i++) {
                this.amountOfCookiesCeil = Math.ceil(this.avg * this.generateRandom());
                this.cookiesArray.push(this.amountOfCookiesCeil);
            }
            return this.cookiesArray;
      },


}
seattle.amountOfCookiesPerHourFunction();

var count =0;
document.write("<h2>", "Seattle", "</h2>");
document.write("<ul>");
for( i=0 ; i<15; i++){
    count += seattle.cookiesArray[i];
    document.write("<li>");
    document.write(hours[i], ": ", seattle.cookiesArray[i]);
    document.write("<br>");
    document.write("</li>");
}
document.write("<li>", "Total: ", count);
document.write("</ul>");

// ---------------- Tokyo ---------------------- //

var Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesArray: [],
    generateRandom: function() {
        var range = this.max - this.min;
        var randomNumber = Math.floor(Math.random() * range) + this.min;
        return randomNumber;
    },
     
       amountOfCookiesPerHourFunction: function() {
           for (i = 0; i < 15; i++) {
               this.amountOfCookiesCeil = Math.ceil(this.avg * this.generateRandom());
               this.cookiesArray.push(this.amountOfCookiesCeil);
           }
           return this.cookiesArray;
     },


}
Tokyo.amountOfCookiesPerHourFunction();

var count =0;
document.write("<h2>", "Tokyo", "</h2>");
document.write("<ul>");
for( i=0 ; i<15; i++){
   count += Tokyo.cookiesArray[i];
   document.write("<li>");
   document.write(hours[i], ": ", Tokyo.cookiesArray[i]);
   document.write("<br>");
   document.write("</li>");
}
document.write("<li>", "Total: ", count);
document.write("</ul>");


// ---------------- Dubai ---------------------- //

var Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesArray: [],
    generateRandom: function() {
        var range = this.max - this.min;
        var randomNumber = Math.floor(Math.random() * range) + this.min;
        return randomNumber;
    },
     
       amountOfCookiesPerHourFunction: function() {
           for (i = 0; i < 15; i++) {
               this.amountOfCookiesCeil = Math.ceil(this.avg * this.generateRandom());
               this.cookiesArray.push(this.amountOfCookiesCeil);
           }
           return this.cookiesArray;
     },


}
Dubai.amountOfCookiesPerHourFunction();

var count =0;
document.write("<h2>", "Dubai", "</h2>");
document.write("<ul>");
for( i=0 ; i<15; i++){
   count += Dubai.cookiesArray[i];
   document.write("<li>");
   document.write(hours[i], ": ", Dubai.cookiesArray[i]);
   document.write("<br>");
   document.write("</li>");
}
document.write("<li>", "Total: ", count);
document.write("</ul>");



// ---------------- Paris ---------------------- //

var Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesArray: [],
    generateRandom: function() {
        var range = this.max - this.min;
        var randomNumber = Math.floor(Math.random() * range) + this.min;
        return randomNumber;
    },
     
       amountOfCookiesPerHourFunction: function() {
           for (i = 0; i < 15; i++) {
               this.amountOfCookiesCeil = Math.ceil(this.avg * this.generateRandom());
               this.cookiesArray.push(this.amountOfCookiesCeil);
           }
           return this.cookiesArray;
     },


}
Paris.amountOfCookiesPerHourFunction();

var count =0;
document.write("<h2>", "Paris", "</h2>");
document.write("<ul>");
for( i=0 ; i<15; i++){
   count += Paris.cookiesArray[i];
   document.write("<li>");
   document.write(hours[i], ": ", Paris.cookiesArray[i]);
   document.write("<br>");
   document.write("</li>");
}
document.write("<li>", "Total: ", count);
document.write("</ul>");


// ---------------- Lima ---------------------- //

var Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesArray: [],
    generateRandom: function() {
        var range = this.max - this.min;
        var randomNumber = Math.floor(Math.random() * range) + this.min;
        return randomNumber;
    },
     
       amountOfCookiesPerHourFunction: function() {
           for (i = 0; i < 15; i++) {
               this.amountOfCookiesCeil = Math.ceil(this.avg * this.generateRandom());
               this.cookiesArray.push(this.amountOfCookiesCeil);
           }
           return this.cookiesArray;
     },


}
Lima.amountOfCookiesPerHourFunction();

var count =0;
document.write("<h2>", "Lima", "</h2>");
document.write("<ul>");
for( i=0 ; i<15; i++){
   count += Lima.cookiesArray[i];
   document.write("<li>");
   document.write(hours[i], ": ", Lima.cookiesArray[i]);
   document.write("<br>");
   document.write("</li>");
}
document.write("<li>", "Total: ", count);
document.write("</ul>");

































//  console.log(seattle.amountOfCookiesPerHour);
//  console.log(seattle.amountOfCookiesPerHourFunction());

// console.log(seattle.min);
// -------------------------------------- //


// ----
// const HOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// const seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     generateRandom: function () {
//         const range = this.max - this.min;
//         return Math.floor(Math.random() * range) - this.min;
//     },
//     amountOfCookiesPerHourFunction: function () {
//         this.amountOfCookiesPerHour = new Map();
//         for (let i = 0; i < HOURS.length; i++) {
//             const amountOfCookies = this.avg * this.generateRandom();
//             this.amountOfCookiesPerHour.set(HOURS[i], amountOfCookies);
//         }
//     },
//     amountOfCookiesPerHour: null
// };

// seattle.amountOfCookiesPerHourFunction();
// for (const [time, cph] of seattle.amountOfCookiesPerHour.entries()) {
//     console.log(time + ' => ' + cph);
// }

