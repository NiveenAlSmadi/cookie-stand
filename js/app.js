'use strict';

let Seattle = { name: 'Seattle' , min :23, max:65, Avg:6.3,
  time : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  result: [], //proparites


  customers_per_hour: function(){ // methods
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return x;}, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    let Amounts=Math.floor(this.Avg*this.customers_per_hour());

    return Amounts;},

  finelresult: function(){
    let total=0;
    let list = document.getElementById(this.name);
    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies());
      total = +this.result[i];
      let A = document.createElement('li');
      A.innerHTML = this.time[i] + ' ' + this.result[i];
      list.appendChild(A);
    }
    let A= document.createElement('li');
    A.innerHTML = 'Total=' + total;
    list.appendChild(A);

  },


};
Seattle.finelresult();


let Tokyo = { name: 'Tokyo' , min :3, max:24, Avg:1.2, result:[],
  time : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],



  customers_per_hour: function(){ // methods
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return x;}, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    let Amounts=Math.floor(this.Avg*this.customers_per_hour());

    return Amounts;},

  finelresult: function(){
    let total=0;
    let list = document.getElementById(this.name);
    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies());
      total = total+this.result[i];
      let A = document.createElement('li');
      A.innerHTML = this.time[i] + ' ' + this.result[i];
      list.appendChild(A);
    }
    let A= document.createElement('li');
    A.innerHTML = 'Total=' + total;
    list.appendChild(A);

  },

};

Tokyo.finelresult();

let Dubai = { name: 'Dubai' , min :11, max:38, Avg:3.7, result:[],
  time : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],



  customers_per_hour: function(){ // methods
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return x;}, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    let Amounts=Math.floor(this.Avg*this.customers_per_hour());

    return Amounts;},

  finelresult: function(){
    let total=0;
    let list= document.getElementById(this.name);
    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies());
      total = total+this.result[i];
      let A = document.createElement('li');
      A.innerHTML = this.time[i] + ' ' + this.result[i];
      list.appendChild(A);
    }
    let A= document.createElement('li');
    A.innerHTML = 'Total=' + total;
    list.appendChild(A);

  },

};

Dubai.finelresult();



let Paris = { name: 'Paris' , min :20, max:38, Avg:2.3,
  time : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  result: [], //proparites


  customers_per_hour: function(){ // methods
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return x;}, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    let Amounts=Math.floor(this.Avg*this.customers_per_hour());

    return Amounts;},

  finelresult: function(){
    let total=0;
    let list = document.getElementById(this.name);
    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies());
      total = +this.result[i];
      let A = document.createElement('li');
      A.innerHTML = this.time[i] + ' ' + this.result[i];
      list.appendChild(A);
    }
    let A= document.createElement('li');
    A.innerHTML = 'Total =' + total;
    list.appendChild(A);

  },


};
Paris.finelresult();

let Lima = { name: 'Lima' , min :2, max:16, Avg:4.6,
  time : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  result: [], //proparites


  customers_per_hour: function(){ // methods
    let x = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return x;}, // Getting a random integer between two values, inclusive


  cookies:function(){ // using average cookies and the random number of customers to evaluate amounts.
    let Amounts=Math.floor(this.Avg*this.customers_per_hour());

    return Amounts;},

  finelresult: function(){
    let total=0;
    let list = document.getElementById(this.name);
    for (let i = 0; i <14; i++) {
      this.result.push(this.cookies());
      total = +this.result[i];
      let A = document.createElement('li');
      A.innerHTML = this.time[i] + ' ' + this.result[i];
      list.appendChild(A);
    }
    let A= document.createElement('li');
    A.innerHTML = 'Total=' + total;
    list.appendChild(A);

  },


};
Lima.finelresult()
