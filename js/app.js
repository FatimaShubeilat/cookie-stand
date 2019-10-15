  
var hours = ['' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function States(location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesArray = [];
  this.dailyCookieSales = 0;

  this.amountOfCookiesPerHourFunction();
}

States.prototype.generateRandom = function() {
  var range = this.max - this.min;

  var randomNumber = Math.ceil(Math.random() * range + this.min);

  return randomNumber;
}

States.prototype.amountOfCookiesPerHourFunction = function(){
  for (var i = 0; i < hours.length; i++) {

      var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

      this.cookiesArray.push(amountOfCookiesCeil);
      this.dailyCookieSales += amountOfCookiesCeil;
    }
}

States.prototype.outpuHTML = function() {
  var container = document.getElementById('ShopsData');
  var article = document.createElement('article');
  container.appendChild(article);
// do table


// header row
var headerRow = document.createElement('tr');
article.appendChild(headerRow);

for(var i=0 ; i<hours.length; i++){
var statesHeader = document.createElement('th');
headerRow.appendChild(statesHeader);
statesHeader.textContent = hours[i];
}

// Seattle Row
var dataRow = document.createElement('tr');
article.appendChild(dataRow);

var cookieData = document.createElement('th');
dataRow.appendChild(cookieData);
cookieData.textContent = this.location;

// Seattle Row
var dataRow = document.createElement('tr');
article.appendChild(dataRow);

var cookieData = document.createElement('th');
dataRow.appendChild(cookieData);
cookieData.textContent = 'Totals';



}

// store all kittens, notice last kitten was not first stored in a variable


var seattle = new States('Seattle', 23, 65, 6.3);
var tokyo = new States('Tokyo', 20, 50, 1.2 );
var dubai = new States('Dubai', 11,38,3.7);
var paris = new States('Paris', 20 ,38, 2.3);
var lima = new States('Lima', 2,16,4.6);


var states = [seattle, tokyo, dubai,paris,lima];
for (var i = 0; i < states.length; i++) {
  states[i].outpuHTML();
console.log(states[i]);
}