const express = require('express');
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(router);

app.get('/',  (req, res) => {
	res.json({
		message: 'Music API is Live'
	})
});

app.listen(7000,()=>{
    console.log('running at port 7000');
})