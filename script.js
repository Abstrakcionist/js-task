//создание рандомного числа
function getRandomNumber(min, max) {
    return Math.round(Math.random() * ((max + 1) - min) + min);
}


//задержка при наводке
function MakeRowHover(row) {

    //добавление события наведения мыши
    row.addEventListener("mouseover", function() {
      setTimeout(() => this.style.backgroundColor = "silver", 200);
    });

    //добавление события отвода мыши
    row.addEventListener("mouseout", function() {
      this.style.backgroundColor = "";
    });
}


let div = document.createElement('div');//добавление дива для суммы
let sum = 0;//счетчик суммы
let number = 0;//текущее случайное число


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
	//добавление строки в таблицу
	table.appendChild(tr);
}


//реализация счетчика суммы случайных чисел
div.innerHTML = `<p>Сумма всех чисел: ${sum}<p>`;
document.body.appendChild(div);


//реализация задержки при наведении
let trs = document.querySelectorAll("tr");
for (let i = 0; i < trs.length; i++) {
  MakeRowHover(trs[i]);
}
