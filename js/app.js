var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function States(location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesArray = [];
  this.dailyCookieSales = 0;

  this.amountOfCookiesPerHourFunction();
}

// adding the event listener 
var shopsForms = document.getElementById("addShopForm");

shopsProfile.addEventListener('submit' , function(event) {
event.preventDefault();      // the defaullt is to move to another page so stop i from this we will do this command
var location= event.target.location.value; // name from the form not the constructor
 var min = event.target.minimum.value;
 var max = event.target.maximum.value;
 var avg = event.target.avarage.value;

 var newShop = new States(location, min, max, avg);

 newShop.amountOfCookiesPerHourFunction();
 newShop.outputToHTML();

}
);


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
    // console.log(this.dailyCookieSales);
}

States.prototype.outputToHTML = function() {
    var ShopsParentElement = document.getElementById("shopsProfile")
  
    var article = document.createElement('article');
    ShopsParentElement.appendChild(article);

    var table = document.createElement('table');
    article.appendChild(table);


    var addedRow = document.createElement('tr');
  table.appendChild(addedRow);

  var td = document.createElement('td');
  addedRow.appendChild(td);
  addedRow.textContent = this.location;

  for(var i=0; i<hours.length ; i++) {
  var  td = document.createElement('td');
    addedRow.appendChild(td);
    td.textContent = this.cookiesArray[i];
  }

 var  td = document.createElement('td');
  addedRow.appendChild(td);
  addedRow.textContent = this.dailyCookieSales;
  console.log(this.dailyCookieSales);
}

// Header row function
function outputHRow(table) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');

  tr.appendChild(th);

  for(var i=0; i <hours.length; i++){
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hours[i];
  }

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Daily Location Total'
}
    

// foorter function

function outputFRow(table) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = 'Totals';

  var totalCount = 0;
  for (var j=0; j< hours.length ; j++) {
    td = document.createElement('td');
    tr.appendChild(td);

    var countSum = 0;
    for (var i=0; i < shops.length ; i ++) {
      var shop = shops[i];
      countSum += shop.cookiesArray[j];
    }
    td.textContent = countSum;
    totalCount += countSum;

  }

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = totalCount;
}


var seattle = new States('Seattle',23, 65, 6.5);
var dubai = new States('Dubai',11, 38, 3.7);
var tokyo = new States('Tokyo',3, 24, 1.2);
var paris = new States('Paris',20, 38, 2.3);
var lima = new States('Lima',2, 16, 4.6);


var shops = [seattle, dubai, tokyo, paris, lima]; // add more shops when ready


var container = document.getElementById('content-area');

var table = document.createElement('table');

container.appendChild(table);

outputHRow(table);

for (var i = 0; i < shops.length; i++) {
  
  var shop = shops[i];

  shop.outputToHTML(table);
}

outputFRow(table);



// // console.log(name);

// var interests = event.target.interests.value;
// // the interset is an array.
// interests = interests.split(',');
// // console.log(interests);
