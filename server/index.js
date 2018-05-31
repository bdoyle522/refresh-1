
import express from "express";
import massive from "massive";
import dotenv from "dotenv";

const port = 5000;


const app = express();
dotenv.config();



app.get('/', (req, res) => 
	res.send('Hello World!')
);

app.listen(port, () => {
	console.log("We are listening to you on port " + port);
});



// Database


massive(process.env.DATABASE_URL).then(massiveInstance => {
	app.set('db', massiveInstance);
}).catch(err => {
	console.log(err)
});