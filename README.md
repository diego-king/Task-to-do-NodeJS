# Task-to-do-NodeJS
A toDo App based on Node JS, express framework, MongoDB, and Angular JS<br />

### Demo video ###

### back-end services API ###
1) Find all toDos based on user name:<br />
Get method: https://localhost:3000/db/findToDos/{name}<br />

2) Find a toDo based on ID:<br />
Get method: https://localhost:3000/db/findToDo/{id} <br/>

3) Add a new toDo to DB:<br />
Post method: https://localhost:3000/db/todo <br/>
{
	"name": {name},
	"task": {task},
	"isDone": boolean,
	"deadline": {YYYY-MM-DD}
}

4) Update a toDo in DB:<br />
Put method: https://localhost:3000/db/todo <br/>
{
  "id": {id},
	"name": {name},
	"task": {task},
	"isDone": boolean,
	"deadline": {YYYY-MM-DD}
}

5) Remove a toDo in DB:<br />
Delete method: https://localhost:3000/db/todo/{id} <br/>

 ### Setup ###
 1) Enable MongoDB services in local and set port to be 27017.
 2) Create a DB named "toDoDB".
 3) Create a collection named "toDos".
 4) Install Node Js on local host.
 5) Use below cmd in terminal at directory of task-to-do folder.<br />
 "node task-to-do".
