var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



// create shop objects
var seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesArray: [],
    dailyCookieSales: 0,

    generateRandom: function () {

        var range = this.max - this.min;

        var randomNumber = Math.random() * range + this.min;

        return Math.ceil(randomNumber);
    },

    amountOfCookiesPerHourFunction: function () {

        for (var i = 0; i < hours.length; i++) {

            var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

            this.cookiesArray.push(amountOfCookiesCeil);

            this.dailyCookieSales += amountOfCookiesCeil;
        }
    },

    outpuHTML: function () {

        var container = document.getElementById('content-area');

        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);


        for (var i = 0; i < hours.length; i++) {

            var li = document.createElement('li');
            ul.appendChild(li);

            var salesInfo = hours[i] + ': ' + this.cookiesArray[i] + ' cookies';

            li.textContent = salesInfo;

        }

        var li = document.createElement('li');
        li.textContent = 'Total: ' + this.dailyCookieSales + ' cookies';
        ul.appendChild(li);

    },
}
////////////// TOKYO /////////////
var tokyo = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesArray: [],
    dailyCookieSales: 0,

    generateRandom: function () {

        var range = this.max - this.min;

        var randomNumber = Math.random() * range + this.min;

        return Math.ceil(randomNumber);
    },

    amountOfCookiesPerHourFunction: function () {

        for (var i = 0; i < hours.length; i++) {

            var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

            this.cookiesArray.push(amountOfCookiesCeil);

            this.dailyCookieSales += amountOfCookiesCeil;
        }
    },

    outpuHTML: function () {

        var container = document.getElementById('content-area');

        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);


        for (var i = 0; i < hours.length; i++) {

            var li = document.createElement('li');
            ul.appendChild(li);

            var salesInfo = hours[i] + ': ' + this.cookiesArray[i] + ' cookies';

            li.textContent = salesInfo;

        }

        var li = document.createElement('li');
        li.textContent = 'Total: ' + this.dailyCookieSales + ' cookies';
        ul.appendChild(li);

    },
}

////////// DUBAI //////////////////
var dubai = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesArray: [],
    dailyCookieSales: 0,

    generateRandom: function () {

        var range = this.max - this.min;

        var randomNumber = Math.random() * range + this.min;

        return Math.ceil(randomNumber);
    },

    amountOfCookiesPerHourFunction: function () {

        for (var i = 0; i < hours.length; i++) {

            var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

            this.cookiesArray.push(amountOfCookiesCeil);

            this.dailySales += amountOfCookiesCeil;
        }
    },

    outpuHTML: function () {

        var container = document.getElementById('content-area');

        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);


        for (var i = 0; i < hours.length; i++) {

            var li = document.createElement('li');
            ul.appendChild(li);

            var salesInfo = hours[i] + ': ' + this.cookiesArray[i] + ' cookies';

            li.textContent = salesInfo;

        }

        var li = document.createElement('li');
        li.textContent = 'Total: ' + this.dailyCookieSales + ' cookies';
        ul.appendChild(li);

    },
}
//////////////// Paris //////////////
var paris = {
    location: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesArray: [],
    dailyCookieSales: 0,

    generateRandom: function () {

        var range = this.max - this.min;

        var randomNumber = Math.random() * range + this.min;

        return Math.ceil(randomNumber);
    },

    amountOfCookiesPerHourFunction: function () {

        for (var i = 0; i < hours.length; i++) {

            var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

            this.cookiesArray.push(amountOfCookiesCeil);

            this.dailyCookieSales += amountOfCookiesCeil;
        }
    },

    outpuHTML: function () {

        var container = document.getElementById('content-area');

        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);


        for (var i = 0; i < hours.length; i++) {

            var li = document.createElement('li');
            ul.appendChild(li);

            var salesInfo = hours[i] + ': ' + this.cookiesArray[i] + ' cookies';

            li.textContent = salesInfo;

        }

        var li = document.createElement('li');
        li.textContent = 'Total: ' + this.dailyCookieSales + ' cookies';
        ul.appendChild(li);

    },
}
//////////// Lima /////////////
var lima = {
    location: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesArray: [],
    dailyCookieSales: 0,

    generateRandom: function () {

        var range = this.max - this.min;

        var randomNumber = Math.random() * range + this.min;

        return Math.ceil(randomNumber);
    },

    amountOfCookiesPerHourFunction: function () {

        for (var i = 0; i < hours.length; i++) {

            var amountOfCookiesCeil = Math.ceil(this.generateRandom() * this.avg);

            this.cookiesArray.push(amountOfCookiesCeil);

            this.dailyCookieSales += amountOfCookiesCeil;
        }
    },

    outpuHTML: function () {

        var container = document.getElementById('content-area');

        var h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = this.location;

        var ul = document.createElement('ul');
        container.appendChild(ul);


        for (var i = 0; i < hours.length; i++) {

            var li = document.createElement('li');
            ul.appendChild(li);

            var salesInfo = hours[i] + ': ' + this.cookiesArray[i] + ' cookies';

            li.textContent = salesInfo;

        }

        var li = document.createElement('li');
        li.textContent = 'Total: ' + this.dailyCookieSales + ' cookies';
        ul.appendChild(li);

    },
}

var shops = [seattle, tokyo, dubai, paris, lima]; // add more shops when ready

for (var i = 0; i < shops.length; i++) {
    var shop = shops[i];
    shop.amountOfCookiesPerHourFunction();
    shop.outpuHTML();
}

