const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res. send("IBM Cloud DevOps is working!");
});

app.listen(8080, () => {
	console.log("listeing on port 8080...");
}); 
