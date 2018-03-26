# Task-to-do-NodeJS
A toDo App based on Node JS, express framework, and MongoDB<br />

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
Delete method: https://localhost:3000/db/todo <br/>
{
  "id": {id},
}
