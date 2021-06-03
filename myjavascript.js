'use strict';

function DataTable(config, data) {
    //Create Table
    let usersTable = document.querySelector(config.parent);
    let table = document.createElement('table');
    usersTable.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.fontSize = "18px";
    //Create Table Head
    let tHead = document.createElement('thead');
    table.appendChild(tHead);
    let headTr = document.createElement('tr');
    tHead.appendChild(headTr);
    let counterTh = document.createElement('th');
    let counterthText = document.createTextNode('№');
    counterTh.appendChild(counterthText);
    headTr.appendChild(counterTh);
    counterTh.style.border = "2px solid #a9a9a9";
    counterTh.style.padding = "8px";
    counterTh.style.backgroundColor = "#e5e4e2";
    for (let i = 0; i < config.columns.length; i++) {
        let th = document.createElement('th');
        let thText = document.createTextNode(config.columns[i].title);
        th.appendChild(thText);
        headTr.appendChild(th);
        th.style.border = "2px solid #a9a9a9";
        th.style.padding = "10px";
        th.style.textTransform = "uppercase";
        th.style.backgroundColor = "#e5e4e2";
    }
    //Create Table Body
    let tBody = document.createElement('tbody');
    table.appendChild(tBody);
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        tBody.appendChild(tr);
        tr.addEventListener("mouseover", hoverRow);
        tr.addEventListener("mouseout", unHoverRow);
        function hoverRow() { tr.style.backgroundColor = "#adadad" }
        function unHoverRow() { tr.style.backgroundColor = "white" }
        let counterTd = document.createElement('td');
        tr.appendChild(counterTd);
        let counterTdText = document.createTextNode(++counter);
        counterTd.appendChild(counterTdText);
        counterTd.style.border = "2px solid #a9a9a9";
        counterTd.style.padding = "10px";
        counterTd.style.textAlign = "center";
        for (let j = 0; j < config.columns.length; j++) {
            let td = document.createElement('td');
            let tdText = document.createTextNode(users[i][config.columns[j].value]);
            td.appendChild(tdText)
            tr.appendChild(td);
            td.style.border = "2px solid #a9a9a9";
            td.style.padding = "10px";
        }
    }


}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Имя', value: 'name' },
        { title: 'Фамилия', value: 'surname' },
        { title: 'Возраст', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
];

DataTable(config1, users);

var tabledata = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Дима', surname: 'Васечкин', age: 15 },
    { id: 30052, name: 'Галя', surname: 'Бондар', age: 30 },
    { id: 30052, name: 'Галина', surname: 'Рижняк', age: 27 },
];

var table = new Tabulator("#example-table", {
    height: 100, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: tabledata, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    columns: [ //Define Table Columns
        { title: "№", formatter: "rownum", hozAlign: "center", width: 80, headerHozAlign: "center" },
        { title: 'Имя', field: 'name', width: 150, headerHozAlign: "center" },
        { title: 'Фамилия', field: 'surname', headerHozAlign: "center" },
        { title: 'Возраст', field: 'age', headerHozAlign: "center" },
    ]
});