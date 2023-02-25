//создание рандомного числа
function getRandomNumber(min, max) {
    return Math.round(Math.random() * ((max + 1) - min) + min);
}
let div = document.createElement('div');
let sum = 0;
let number = 0;
//создание таблицы
let table = document.createElement('table');
document.body.appendChild(table);
//заполнение таблицы
for (let i = 0; i < 100; i++) {//создание 100 строк
	let tr = document.createElement('tr');
	//заполнение первой ячейки
	let td = document.createElement('td');
    td.innerHTML = i + 1;
	tr.appendChild(td);
    //заполнение вторй ячекйи
    number = getRandomNumber(1000, 5000);
    sum = sum + number;
	let td2 = document.createElement('td');
    td2.innerHTML = number;
	tr.appendChild(td2);
	
	table.appendChild(tr);
}
div.innerHTML = `Сумма всех чисел: ${sum}`;
document.body.appendChild(div);