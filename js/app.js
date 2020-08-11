'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);
var dubai = new Shop('Dubai', 11, 38, 3.7);

function Shop(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.sales = [];
  this.dailyTotal = 0;
}

Shop.prototype.getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
Shop.prototype.salesData = function () {
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = (Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
    this.sales.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};
Shop.prototype.render = function () {
  this.salesData();
  var seattle = document.getElementById('seattle');
  for (var i = 0; i < this.sales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
    seattle.append(liEl);
  }
};
seattle.render();

Shop.prototype.render = function () {
  this.salesData();
  var tokyo = document.getElementById('tokyo');
  for (var i = 0; i < this.sales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
    tokyo.append(liEl);
  }
};
tokyo.render();

Shop.prototype.render = function () {
  this.salesData();
  var paris = document.getElementById('paris');
  for (var i = 0; i < this.sales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
    paris.append(liEl);
  }
};
paris.render();

Shop.prototype.render = function () {
  this.salesData();
  var lima = document.getElementById('lima');
  for (var i = 0; i < this.sales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
    lima.append(liEl);
  }
};
lima.render();

Shop.prototype.render = function () {
  this.salesData();
  var dubai = document.getElementById('dubai');
  for (var i = 0; i < this.sales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
    dubai.append(liEl);
  }
};
dubai.render();

