var tableBody = document.getElementById('salesTable');

function renderHeader() {
  var headerRow = document.createElement('tr');
  var headerStore = document.createElement('th');
  headerStore.textContent = 'Locations';
  headerRow.appendChild(headerStore);
  tableBody.appendChild(headerRow);

  for (var i = 0; i < hours.length; i++) {
    var headerHours = document.createElement('th');
    headerHours.textContent = hours[i];
    headerRow.appendChild(headerHours);
  }
  var headerTotal = document.createElement('th');
  headerTotal.textContent = 'Store Total';
  headerRow.appendChild(headerTotal);
}

SalmonCookies.prototype.body = function () {
  var bodyRow = document.createElement('tr');
  tableBody.appendChild(bodyRow);

  //Create Store name for each row
  var bodyStore = document.createElement('td');
  bodyStore.textContent = this.storeName;
  bodyRow.appendChild(bodyStore);

  //Created the Hours by looping through the hours array and rendering hourlySales
  for (var i = 0; i < hours.length; i++) {
    var bodyHours = document.createElement('td');
    bodyHours.textContent = this.hourlySales[i];
    bodyRow.appendChild(bodyHours);
  }

  //Grabbing Daily Total and rendering it at the end of the row.
  var bodyTotal = document.createElement('td');
  bodyTotal.textContent = this.dailyTotals;
  bodyRow.appendChild(bodyTotal);
}

function renderFooter() {
  var footerRow = document.createElement('tr');
  var footerStore = document.createElement('th');
  footerStore.textContent = 'Hourly Totals';
  footerRow.appendChild(footerStore);

  var grandTotal = 0;
  var totalHourlySales = 0;
  for (var row = 0; row < hours.length; row++) {
    totalHourlySales = 0;
    for (var column = 0; column < storeLocations.length; column++) {
      totalHourlySales += storeLocations[column].hourlySales[row];
      grandTotal += storeLocations[column].hourlySales[row];
    }
    var totalHours = document.createElement('th');
    totalHours.textContent = totalHourlySales;
    footerRow.appendChild(totalHours);
  }
  var grandTotalSales = document.createElement('th');
  grandTotalSales.textContent = grandTotal;
  footerRow.appendChild(grandTotalSales);
  tableBody.appendChild(footerRow);
}
//---------------------------------Executable Code--------------------------------------------------
function render() {
  tableBody.innerHTML = null;
  renderHeader();
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].body();
  }
  renderFooter();
}
render();