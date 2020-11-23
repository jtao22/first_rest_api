import { v4 as uuidv4 } from 'uuid';

export const showUsers = (req,res) => {
	console.log(users);
	res.send(users);
}
export const addUsers = (req,res) =>{
	const newuser = req.body;
	const userID = {... newuser, id: uuidv4()};
	users.push(userID);
	res.send(`User with username ${newuser.username} added to database!`);
}
export const getUsers = (req,res) =>{
	const id = req.params.id;
	const found = users.find((user) => user.id == id);
	res.send(found);
}

export const removeUsers = (req,res) =>{
	const id = req.params.id;
	const username = req.params.username;
	const password = req.params.password;
	users = users.filter((user) => user.id != id);
	res.send(`User with id ${id} deleted from database!`);
}

export const updateUsers = (req,res) =>{
	const id = req.params.id;
	const update = users.find((user) => user.id == id);
	const {username, password} = req.body;
	if(username){
		update.username = username;
	}
	if(password){
		update.password = password;
	}
	res.send(`Information for user with id ${id} updated!`);
}
