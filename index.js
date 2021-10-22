const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('wow i am Excited to learn node and express with nodemon i')
});

const users =[
    {id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01723433233'},
    {id: 1, name: 'Shahara', email: 'Shahara@gmail.com', phone: '01723433233'},
    {id: 2, name: 'Shamiya', email: 'Shamiya@gmail.com', phone: '01723433233'},
    {id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01723433233'},
    {id: 4, name: 'Sumaya', email: 'Sumaya@gmail.com', phone: '01723433233'},
    {id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01723433233'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
   else{
    res.send(users)
   }
});

//app.METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apply', 'banna'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});

