'use strict';
let table = document.getElementById('table1');
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let Seattle  = new Sales ('Seattle', 23, 65, 6.3);
let Tokyo = new Sales('Tokyo', 3, 24, 1.2);
let Dubai = new Sales('Dubai', 11, 38, 3.7);
let Paris= new Sales('Paris', 20, 38, 2.3);
let Lima = new Sales('Lima', 2, 16, 4.6);
let city  = [Seattle,Tokyo, Dubai,Paris, Lima];



function random(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function Sales (Name, min, max, avg) {// Constructor
  this.Name = Name;
  this.min= min;
  this.max = max;
  this.avg = avg;
  this.customers_per_hour = [];
  this.cookies = [];
  this.result= 0;

}
// prototype for const
Sales.prototype.cph= function (){
  for (var i = 0; i < time.length; i++) {

    this.customers_per_hour.push(random(this.min, this.max));
  }
};
Sales.prototype.cookiesph = function(){
  this.cph();
  for (var i = 0; i < time.length; i++) {
    let Amounts =Math.ceil(this.avg*this.customers_per_hour[i]);
    this.cookies.push(Amounts);
    //console.log(this.customers_per_hour);
  }

};

Sales.prototype.totalresult=function(){
  this.cookiesph();
  for (var i = 0; i <time.length; i++){
    this.result= this.result + this.cookies[i];}
};



Sales.prototype.render = function() {
  this.totalresult();
  let Head = document.createElement('head');
  table.appendChild(Head);

  let row = document.createElement('tr');
  row.textContent = this.Name;
  table.appendChild(row);
  for(let i = 0; i < time.length; i++) {
    let cookcell = document.createElement('td');
    cookcell.textContent = this.cookies[i];
    row.appendChild(cookcell);}

  let total = document.createElement('td');

  total.textContent=this.result;
  row.appendChild(total);


};


for (let i = 0; i < city.length; i++){
  city[i].render();
}

makeTheFooterRow();

function makeTheFooterRow(){

  let footerRow = document.createElement('tr');
  let footerText = document.createElement('th');
  footerText.textContent = 'Total Hourly';
  footerRow.appendChild(footerText);

  let totalOfHours = 0;
  let hourlyTotals = 0;
  //Total Hourly totals
  for(var i = 0; i < time.length; i++){
    hourlyTotals = 0;
    for(var j = 0; j < city.length; j++){

      hourlyTotals = hourlyTotals +city[j].cookies[i];

      totalOfHours = totalOfHours +city[j].cookies[i];
    }
    footerText = document.createElement('th');
    footerText.textContent = hourlyTotals;
    footerRow.appendChild(footerText);
  }
  footerText = document.createElement('th');
  footerText.textContent = totalOfHours;
  footerRow.appendChild(footerText);


  table.appendChild(footerRow);
}

