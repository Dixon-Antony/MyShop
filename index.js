const express = require('express');
const app = express();
app.use(express.json());

var students = [
 {name : 'Dixon', id : '1',dept : 'IT'},
 {name : 'Jeya Ganesh', id : '2',dept : 'CSE'},
{name : 'Jeswin', id : '3',dept : 'CSE'},
 {name : 'Sreesh', id : '4',dept : 'IT'},
 {name : 'Sid', id : '5',dept : 'IT'},
 {name : 'Ragul', id : '7',dept : 'ECE'},
 {name : 'Rahul Hariesh', id : '8',dept : 'ECE'}
]
app.get('/',(req,res)=>{
 res.send('<center><h1 style = "color : black;">Hello There ! ! ! </h1><br><br/><h2>You can access your students data and see the status</center>');
});
app.get('/students',(req,res)=>
{
 res.send(students);
});
//Get the dept of the student based on the ID.
app.get('/students/:id',(req,res)=>
{
 const result = students.find(x => x.id === req.params.id);
 if(!result)
 {
 res.status(404).send('<h3>Sorry please check student ID, No student with the given ID');
 }
 res.send(result.dept);
});
//Adding a new student
app.post('/add',(req,res)=>
{
var student = req.body;
students.push(student);
res.send(students);
});
//Update the dept based on the student id
app.put('/up/:id',(req,res)=>
{
 const f = students.find(x=>x.id === req.params.id);
 if(!f)
 {
 res.status(404).send('Sorry unable to find record');
 }
 //Updating dept of the student
 f.dept = req.body.dept;
 res.send(f);
});
//Deleting a student for the given id
app.delete('/del/:id',(req,res)=>
{
 var p = req.params.id;
 const result = students.find(x => x.id === p);
 if(!result)
 {
 res.status(404).send('<h3>Sorry please check student ID, No student with the given ID');
 }
 const ind = students.indexOf(result);
 students.splice(ind,1);
 res.send(students); 
});
var server = app.listen(5001,function(){
{
 var port = server.address().port;
 console.log("Application server listening on the port number : ",port);
}})
