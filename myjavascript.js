'use strict';

function DataTable(config, data) {
    // содержимое этой функции вам и нужно написать :)
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
