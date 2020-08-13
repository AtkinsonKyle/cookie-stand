'use strict';

var table = document.getElementById('store');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);
var dubai = new Shop('Dubai', 11, 38, 3.7);

var Locations = [seattle, tokyo, dubai, lima, paris];
var allHourlyTotalsArr = [];
var grandTotal = 0;
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
    // allHourlyTotalsArr[i] += hourlyTotal;
    this.dailyTotal += hourlyTotal;
    // totalGrand += hourlyTotal;
    console.log(this.sales);
  }
};
Shop.prototype.render = function () {
  this.salesData();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var i= 0; i < this.sales.length; i++){
    var tableSales = document.createElement('td');
    tableSales.textContent = this.sales[i];
    tableRow.appendChild(tableSales);
  }
  var tableTotal = document.createElement('td');
  tableTotal.textContent = this.dailyTotal;
  tableRow.appendChild(tableTotal);
};
function calcTotal() {
  for(var i = 0; i < hours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < Locations.length; j++){
      hourlyTotal += Locations[j].sales[i];
    }
    grandTotal += hourlyTotal;
    allHourlyTotalsArr[i] = hourlyTotal;
  }
}
function renderHead() {
  var headRow = document.createElement('tr');
  var headStore = document.createElement('th');
  headStore.textContent = 'Store Locations';
  headRow.appendChild(headStore);
  table.appendChild(headRow);
  for (var i=0; i < hours.length; i++){
    var headHours = document.createElement('th');
    headHours.textContent = hours[i];
    headRow.appendChild(headHours);
  }
  var headTotal = document.createElement('th');
  headTotal.textContent = 'Location Total';
  headRow.appendChild(headTotal);
}
function renderFooter(){
  calcTotal();
  var tRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = 'Total';
  tRow.appendChild(tableData);
  table.appendChild(tRow);
  for (var i= 0; i < allHourlyTotalsArr.length; i++){
    var tableSales = document.createElement('td');
    tableSales.textContent = allHourlyTotalsArr[i];
    tRow.appendChild(tableSales);
  }
  var tableTotal = document.createElement('td');
  tableTotal.textContent = grandTotal;
  tRow.appendChild(tableTotal);
}
renderHead();
paris.render();
lima.render();
tokyo.render();
dubai.render();
seattle.render();
renderFooter();
