'use strict'

// if (1*4 == 8) {
// console.log('true')
// } else {
// 	console.log("no.")
// }
	
// for (let i = 4; i < 7; i++) {
// 	console.log(i)
// }

// let options = {        //создаем объект и перечисляем его 
// 	witdh: '1024',       //перечисляем его свойства ключ: значение
// 	height: '1024',
// 	name: "jin"
// };
// // console.log(options.name); //вызводим нужное свойство

// options.bool = true;      //добавляем новое свойство
// options.colors = {        //добавляем новое свойство-ОБЪЕКТ
//     hair: "short",
// 	eyes: "brown", 
// 	signature: "purple",
// }
// console.log(options);

// let soldier = {
//     health: 90,
//     armor: 55
 
// };

// let Jhon = {
//     health: 100
   
// };

// Jhon.__proto__ = soldier;

// console.log(Jhon);
// console.log(Jhon.armor);
 
// delete options.bool;

// for (let key in options) {
// 	console.log("Свойство " + key + " имеет значение " + options[key])
// }

// console.log(Object.keys(options).lenght);

// let arr = ["ein",2,3,"four",5];

// arr.forEach(function(item, i, arr) {
// 	console.log(i + ": " + item + "(массив: " + arr + " )");
// })

// console.log(arr);

// let ans = prompt("" , ""),
// wishlist = [];
// wishlist = ans.split(',');
// console.log(wishlist);

// let box = document.getElementById("box"),
//     btn = document.getElementsByTagName("button"),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     heart2 = document.getElementsByClassName('circle'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

//     console.log('box');

// box.style.backgroundColor = 'black';
// btn[1].style.borderRadius = '100%';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0 ; i < heart.length; i++) {
//         heart[i].style.backgroundColor = 'black';

// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'black'

// });
// let div = document.createElement('div'),
//     text = document.createTextNode('aaaa');

// div.classList.add('pink'); //лежит только в коде, нету в чтмл
// div.style.border = '10px'
// // document.body.appendChild(div); //добавляем в чтмл класс
// // wrapper.appendChild(div);

// div.innerHTML = '<h1>hello world!</h1>';
// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);

// document.body.replaceChild(btn[1], circle[1]);
// console.log(div);
// console.log(text);

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function(){
//     alert('вы нажали 1ю кнопку');
// }
// btn[0].addEventListener('click', function(event){
//     // let target = event.target;
//     // target.style.display = 'none';
// //     console.log('событие: ' + event.type + "на элементе " + event.target);
// // });

// // wrap.addEventListener('click', function(){
// //     console.log('событие: ' + event.type + "на элементе " + event.target);

// // });

link.addEventListener('click', function(){
    event.preventDefault();
    console.log('событие: ' + event.type + "на элементе " + event.target);

});

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('пока пока!');

    });

});
// btn[0].addEventListener('click', function(){
//     alert('кнопку нажали снова');
// });

// btn[0].addEventListener('mouseenter', function(){
//     alert('навели');

// });