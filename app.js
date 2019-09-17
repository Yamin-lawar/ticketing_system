const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');

const express = require('express')
//const dotenv = require('dotenv');
//const cors = require('cors')
//dotenv.config();
const app = express()

//app.use(cors())
//app.use()

/*to serve all file staticslly inside this path*/
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('views', path.join(__dirname, 'views'));


//const sequelize = require('./utils/database');

const APIRouter = require('./routes/api')


/*attach api route */
app.use  ('/api/v1/',APIRouter)



app.get('/',(req, res)=>{
	res.status(400);
	res.send({"success":"Your server is up and running"})
})

app.use((req,res,next)=>{
	res.status(404).send({"error":"Route not found"})
})



const server = http.createServer(app)
server.listen(4040)