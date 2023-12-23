'use strict';

let setI = document.getElementsByTagName('button')[0];
let getEl = document.querySelectorAll('button')[1];
let delEl = document.querySelectorAll('button')[2];
let listEl = document.querySelectorAll('button')[3];


class Caffe {
   
   constructor() {
      
      let obj = {};
      this.addValue = function (key, result){
         obj[key] = result;
         console.log(obj);
      };

      this.getInfoAll = function() {
         let menu = [];
         for(let key in obj){
            menu.push(key)
          }
          if(menu.length>1){
            console.log(menu)
          } else ( console.log('Меню пустое'))
          
     }
  
       this.getInfo = function(key) {
            if(key in obj){
               console.log(obj[key])
            } else (console.log('напитка нет в меню.'))
      }
      this.delEl = function (key){
         if(key in obj){
            delete obj[key];
            console.log('Напиток:' + ' ' + key + ' удален из меню' )
         } else (console.log('Данный напиток отсутствовал в меню'))
      }
   }
}
let list = new Caffe('квас', 'кола');

function add() {
   let name_ = prompt('Введите название напитка', 'например: морс');
   let alk = prompt('Он алкогольный?', 'нет');
   let str = prompt('Что входит в состав', '...');
   let result = `Напиток: ${name_}, ${alk}, 'В состав входит:' ${str}.`
   
   list.addValue(name_, result);
}


function _get() {
   let drink = prompt('Какой напиток вас интересует. Введите название', '');
   list.getInfo(drink);
}
function listEls(){
   list.getInfoAll();
}
function _del (){
   let el = prompt('Какой напиток удалить из списка', 'Введите название');
   list.delEl(el);
}

setI.addEventListener('click', add);
getEl.addEventListener('click', _get);
delEl.addEventListener('click', _del);
listEl.addEventListener('click', listEls);
// let j = {}
// console.log(j)
// j.a=prompt('df', 'sdf')
// console.log(j)


// class Animal {
//    constructor(name) {
//      this.speed = 0;
//      this.name = name;
//    }
//    run(speed) {
//      this.speed = speed;
//      alert(`${this.name} бежит со скоростью ${this.speed}.`);
//    }
//    stop() {
//      this.speed = 0;
//      alert(`${this.name} стоит неподвижно.`);
//    }
//  }
 
//  let animal = new Animal("Мой питомец");

//  animal.run(4)
//  animal.stop()