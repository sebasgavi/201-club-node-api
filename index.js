const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const students = [
    {
        firstname: 'Sebas',
        lastname: 'Gaviria',
        program: 'DMI',
        age: 26,
        id: 124512312,
    },
    {
        firstname: 'Sofía',
        lastname: 'Cañón',
        program: 'Microbiology',
        age: 23,
        id: 12312321561,
    },
    {
        firstname: 'Christopher',
        lastname: 'Bravo',
        program: 'DMI',
        age: 21,
        id: 911241233,
    },
    {
        firstname: 'Karlos',
        lastname: 'Vallejo',
        program: 'alumni',
        age: 22,
        id: 123123123743,
    },
    {
        firstname: 'Sherline',
        lastname: 'Alexander',
        program: 'Mercadeo',
        age: 40,
        id: 1312315421,
    },
];

app.get('/api/1/students', function(request, response){
    response.send(students);
});

app.get('/api/1/students/:id', function(request, response){
    var id = request.params.id;
    var student = students.find(function(elem){
        return parseInt(id) == parseInt(elem.id);
    });
    response.send(student);
});

app.post('/api/1/students', function(request, response){
    students.push({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        program: request.body.program,
        age: parseInt(request.body.age),
        id: parseInt(request.body.id),
    });
    //response.send(students);
    response.redirect('/');
});

app.delete('/api/1/students/:id', function(request, response){
    var id = request.params.id;
    for(var index = 0; index < students.length; index++) {
        if(students[index].id == id){
            students.splice(index, 1);
            break;
        }
    }
    response.send(students);
});

//app.put('/api/1/students/:id', function());







app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/registro', function(request, response) {
    response.sendFile(path.join(__dirname, '/public/addStudent.html'));
});



app.listen(3000, function(){
    console.log('servidor escuchando en puerto 3000');
});