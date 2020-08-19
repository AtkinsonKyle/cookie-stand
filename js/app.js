'use strict';

// FROM RYAN'S CODE REVIEW 8/18

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var table = document.getElementById('table');
var tbody = document.createElement('tbody');
var allHourlyTotalsArray = [];
var grandTotal = 0;
var form = document.getElementById('form');
var tfoot = document.createElement('tfoot');

//store constructor
function Store(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgSales = avg;
  this.hourlySalesArray = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

//PROTOTYPE METHODS
//calculate customers/hr - from MDN MATH.RANDOM docs
Store.prototype.calcCustPerHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

//calculate cookie sales/hr
Store.prototype.calcCookieSales = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = Math.ceil(this.calcCustPerHour() * this.avgSales);
    this.hourlySalesArray.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

//render method for each row of table
Store.prototype.render = function () {
  this.calcCookieSales();
  var trEl = document.createElement('tr');
  createElement('td', this.name, trEl);
  for(var i = 0; i < hours.length; i++){
    createElement('td', this.hourlySalesArray[i], trEl);
  }
  createElement('td', this.dailyTotal, trEl);
  tbody.appendChild(trEl);
  table.appendChild(tbody);
};

//STANDALONE FUNCTIONS
//render header
function renderHeader() {
  var thead = document.createElement('thead');
  var trEl = document.createElement('tr');
  createElement('th', 'Locations\\Hours', trEl);
  for (var i = 0; i < hours.length; i++) {
    createElement('th', hours[i], trEl);
  }
  createElement('th', 'Totals', trEl);
  thead.appendChild(trEl);
  table.appendChild(thead);
}

//render all rows
function renderAllRows() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

//render footer
function renderFooter() {
  calcTotals();
  var trEl = document.createElement('tr');
  createElement('td', 'Totals', trEl);
  for (var i = 0; i < allHourlyTotalsArray[i]; i++) {
    createElement('td', allHourlyTotalsArray[i], trEl);
  }
  createElement('td', grandTotal, trEl);
  tfoot.appendChild(trEl);
  table.appendChild(tfoot);
}

//element DRY code
function createElement(childString, textContent, parentElement) {
  var childElement = document.createElement(childString);
  childElement.textContent = textContent;
  parentElement.appendChild(childElement);
}

//calculate totals for footer
function calcTotals () {
  allHourlyTotalsArray = [];
  grandTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlySalesArray[i];
    }
    grandTotal += hourlyTotal;
    allHourlyTotalsArray.push(hourlyTotal);
  }
}

// event handler
function handleSubmit(event){
  event.preventDefault();
  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var newStore = new Store (name, min, max, avg);
  newStore.render();
  tfoot.innerHTML = '';
  renderFooter();
}

// RUN EXECUTABLE CODE
//instantiate store objects
new Store('Seattle', 23, 65, 6.3);
new Store ('Tokyo', 3, 24, 1.2);
new Store ('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

//table render
renderHeader();
renderAllRows();
renderFooter();

// event listener
form.addEventListener('submit', handleSubmit);
