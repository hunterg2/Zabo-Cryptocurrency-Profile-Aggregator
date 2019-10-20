sconst express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => re this works!'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.use('/public', express.static(__dirname + "/public"));

app.listen(port, () => console.log(`App listening on port ` + port + `!`))
