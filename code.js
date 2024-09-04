'use strict'

if (1*4 == 8) {
console.log('true')
} else {
	console.log("no.")
}
	
for (let i = 4; i < 7; i++) {
	console.log(i)
}

let options = {        //создаем объект и перечисляем его 
	witdh: '1024',       //перечисляем его свойства ключ: значение
	height: '1024',
	name: "jin"
};
console.log(options.name); //вызводим нужное свойство

options.bool = true;      //добавляем новое свойство
options.colors = {        //добавляем новое свойство-ОБЪЕКТ
    hair: "short",
	eyes: "brown", 
	signature: "purple",
}
console.log(options);
 
delete options.bool;

for (let key in options) {
	console.log("Свойство " + key + " имеет значение " + options[key])
}

console.log(Object.keys(options).lenght);

let arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}
console.log(arr);