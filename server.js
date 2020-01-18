const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const basicAuth = require('express-basic-auth')
// create application/json parser
var jsonParser = bodyParser.json();


// basic auth
app.use(basicAuth({
    users: { 'admin': 'Test123!' }
}))


// GET ALIVE method route
app.get('/alive', (req, res) => {
  res.json({ message: 'hey theere I am alive!!' });
});


// POST method route
app.post('/v1/registeruser',jsonParser, function (req, res) {
	console.log('##########  Name  >>> ' + req.body.name);  
	console.log('##########  Age >>> ' + req.body.age);  
	console.log('##########  email >>> ' + req.body.email);
	console.log('##########  Phone >>> ' + req.body.phone);
	
  res.json({ signedCSR: "user registered !!" });
})

app.listen(9191, () => {
  console.log('Example app listening on port 9191!')
});