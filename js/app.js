'use strict';

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.customers_per_hour.push(x); }
};
Sales.prototype.cookiesph = function(){
  this.cph();
  for (var i = 0; i < time.length; i++) {
    let Amounts =Math.floor(this.Avg*this.customers_per_hour[i]);
    this.cookies.push(Amounts);
  }
};

Sales.prototype.totalresult=function(){
  this.cookiesph();
  for (var i = 0; i <time.length; i++){
    this.totalresult= this.totalresult + this.cookies[i];}
};


/// create instance use new----  //



let Seattle  = new Sales ('Seattle', 23, 65, 6.3);
let Tokyo = new Sales('Tokyo', 3, 24, 1.2);
let Dubai = new Sales('Dubai', 11, 38, 3.7);
let Paris= new Sales('Paris', 20, 38, 2.3);
let Lima = new Sales('Lima', 2, 16, 4.6);
let city  = [Seattle,Tokyo, Dubai,Paris, Lima];

//---------------------------//

let table = document.getElementById('cookie-stand');

Sales.prototype.render = function() {
  this.totalresult();
  let Head = document.createElement('thead');
  let row = document.createElement('tr');
  let total = document.createElement('td');
  table.appendChild(Head);
  row.textContent = this.Name;
  table.appendChild(row);
  total.textContent = this.result;
  row.appendChild(total);
  for(let i = 0; i < time.length; i++) {
    let cookcell = document.createElement('td');
    cookcell.textContent = this.cookies[i];
    row.appendChild(cookcell);}

};

for (let i = 0; i < city.length; i++){
  city[i].render();
}

