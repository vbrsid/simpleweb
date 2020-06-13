const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res. send("Looks like IBM Cloud DevOps is working!");
});

app.listen(8080, () => {
	console.log("listeing on port 8080...");
}); 
