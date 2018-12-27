const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res. send("It's working!");
});

app.listen(8080, () => {
	console.log("listeing on port 8080...");
	console.log("testing auto build feature in dockerhub...");
}); 
