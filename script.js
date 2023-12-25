'use strict';

let setI = document.getElementsByTagName('button')[0];
let getEl = document.querySelectorAll('button')[1];
let delEl = document.querySelectorAll('button')[2];
let listEl = document.querySelectorAll('button')[3];
let setEl = document.querySelectorAll('button')[4];
let getEl2 = document.querySelectorAll('button')[5];

let caffe1 = document.getElementsByClassName('menu')[0];
let caffe2 = document.getElementsByClassName('menu')[1];

// class SiHi {
//    constructor(name){
//       this.name = name;
//    }
//    siHi(){alert ( `${this.name} `)}
// }

class Caffe {
   constructor(name) {
      this.name = name;
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
            alert (menu)
          } else ( alert ('Меню пустое'))
          
     }
  
       this.getInfo = function(key) {
            if(key in obj){
               alert (obj[key])
            } else (alert ('напитка нет в меню.'))
      }
      this.delEl = function (key){
         if(key in obj){
            delete obj[key];
            alert ('Напиток:' + ' ' + key + ' удален из меню' )
         } else (alert ('Данный напиток отсутствовал в меню'))
      }

      
   }
   siHi(){
      alert (`Вы находитесь в кафе: ${this.name}`)
   }
}

class NewCaffe extends Caffe{
  
}

// let say = new SiHi();
let list = new Caffe('Caffe Eleon' );
let listNew = new NewCaffe('Caffe Grand');

function add() {
   let name_ = prompt('Введите название напитка', 'например: морс');
   let alk = prompt('Он алкогольный?', 'нет');
   let str = prompt('Что входит в состав', '...');
   let result = `Напиток: ${name_}, ${alk}, 'В состав входит:' ${str}.`
   
   list.addValue(name_, result);
}

function add2() {
   let name_ = prompt('Введите название напитка', 'например: морс');
   let alk = prompt('Он алкогольный?', 'нет');
   let str = prompt('Что входит в состав', '...');
   let result = `Напиток: ${name_}, ${alk}, 'В состав входит:' ${str}.`
   
   listNew.addValue(name_, result);
}

function _get() {
   let drink = prompt('Какой напиток вас интересует. Введите название', '');
   list.getInfo(drink);
}

function _del (){
   let el = prompt('Какой напиток удалить из списка', 'Введите название');
   list.delEl(el);
}


setI.addEventListener('click', add);
getEl.addEventListener('click', _get);
delEl.addEventListener('click', _del);
listEl.addEventListener('click', list.getInfoAll);
setEl.addEventListener('click', add2);
getEl2.addEventListener('click', listNew.getInfoAll);
caffe1.addEventListener('click', list.siHi)
caffe2.addEventListener('click', listNew.siHi)

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