const express=require('express');
// import express from 'express'
const bodyParser=require('body-parser')
const port=9000;
const app=express();


// TOP LEVEL MIDDLEWARE

app.use(bodyParser.json())


// happy.com
// https://happy.com/api/gethappythings
// PATH = /api/gethappythings
// HANDLER FUNCTION = function(request, response, next) {...}
// req, res
// you have to get a request before you send a response
// app.METHOD(PATH, HANDLER_FUNCTION)

let people=[
    {
        name:'BILLY BOB',
        age:62,
        id:0
    },{
        name:'BILLY BOB',
        age:62,
        id:1
    },{
        name:'BILLY BOB',
        age:62,
        id:2
    },{
        name:'BILLY BOB',
        age:62,
        id:3
    }
]

app.get('/api/getPeople',(req,res)=>{
    res.status(200).send(people)
})

app.get('/api/getPeople/:id',(req,res)=>{
    let person=people.filter(e=>{
        return +req.params.id===e.id;
    })
    res.status(200).send(person)
})


app.listen(port,()=>console.log(`ITS OVER ${port}`))

app.post('/api/addNewPerson',(req,res)=>{
    people.push(req.body)
    res.status(200).json('OH LAWD')
    // object or array use .send
    // strings or numbers use .json
})

// app.delete('/api/deletePerson/:id')

//npm i nodemon -g
//npm ports 3000 -> 12000

