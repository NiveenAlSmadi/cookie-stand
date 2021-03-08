'use strict';
// not finched yet // no table//
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
Sales.prototype.customers_per_hour= function (){
  for (var i = 0; i < time.length; i++) {
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.customers_per_hour.push(x); }
};
Sales.prototype.cookies = function(){
  for (var i = 0; i < time.length; i++) {
    let Amounts =Math.floor(this.Avg*this.customers_per_hour[i]);
    this.customers_per_hour.push(Amounts);
  }
};

Sales.prototype.result=function(){
  this.cookies();
  for (var i = 0; i <time.length; i++){
    this.result= this.total + this.cookies[i];}
};


/// create instance use new----  //


let seattle  = new Sales ('seattle', 23, 65, 6.3);
let tokyo = new Sales('tokyo', 3, 24, 1.2);
let dubai = new Sales('dubai', 11, 38, 3.7);
let paris= new Sales('paris', 20, 38, 2.3);
let lima = new Sales('lima', 2, 16, 4.6);



// table

