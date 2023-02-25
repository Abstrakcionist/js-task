/*let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let row = document.createElement('tr');
let data = document.createElement('td');

table.appendChild(tbody);

document.body.appendChild(table);
data.innerHTML = 'f'
row.appendChild(data)
tbody.appendChild(row)*/


//создание рандомного числа
function getRandomNumber(min, max) {
    return Math.round(Math.random() * ((max + 1) - min) + min);
}
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
	let td2 = document.createElement('td');
    td2.innerHTML = getRandomNumber(1000, 5000);
	tr.appendChild(td2);
	
	table.appendChild(tr);
}

