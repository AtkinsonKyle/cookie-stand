'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  sales: [],
  getRandomInteger: function (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  },
  salesData: function() {
    for(var i = 0; i < hours.length; i++){
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
    }
  },
  render: function() {
    this.salesData();
    var seattle = document.getElementById('seattle');
    for(var i =0; i < this.sales.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
      seattle.append(liEl);
    }
  }
};
console.log(seattle);
var array = [seattle];
function renderShop() {
  for(var i=0; i < array.length; i++){
    array[i].render();
  }
}
renderShop();
