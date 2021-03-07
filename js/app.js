'use strict';
//not finished yet
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let Seattle = { name: 'Seattle' , min :23, max:65, Avg:6.3, result: [], total : 0, //proparites


  customers_per_hour: function(){ // methods
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; }, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    return Math.floor(this.Avg*this.this.customers_per_hour());},

  finelresult: function(){

    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies() );
      this.Total += this.finelresult[i];
    }
  },


};




let Tokyo = { name: 'Tokyo' , min :3, max:24, Avg:1.2, result:[], total :0,


  customers_per_hour: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; },


  cookies:function(){
    return Math.floor(this.Avg*this.customers_per_hour());},

  finelresult: function(){

    for (let i = 0; i < 14; i++) {
      this.result.push(this.cookies() );
      this.Total += this.finelresult[i];
    }
  },



};



let Dubai = { name: 'Dubai', min :11, max:38, Avg:3.7,result:[], total:0,
  customers_per_hour: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; },


  cookies:function(){
    return Math.floor(this.Avg*this.customers_per_hour());},



  finelresult: function(){

    for (let i = 0; i < 14; i++) {
      this.result.push(this.cookies() ) ;
      this.Total += this.finelresult[i];
    }
  },


};



let paris = { name:'paris' , min :20, max:38, Avg:2.3,result:[], total:0,
  customers_per_hour: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; },


  cookies:function(){
    return Math.floor(this.Avg*this.customers_per_hour());},



  finelresult: function(){

    for (let i = 0; i < 14; i++) {
      this.result.push(this.cookies() ) ;
      this.Total += this.cookies[i];
    }
  },


};




let Lima = { name: 'Lima' ,min :2,max:16, Avg:4.6,result: [],total:0,
  customers_per_hour: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; },


  cookies:function(){
    return Math.floor(this.Avg*this.customers_per_hour());},


  finelresult: function(){

    for (let i = 0; i < 14; i++) {
      this.result.push(this.cookies() ) ;
      this.Total += this.finelresult[i];

    }
  },

};







