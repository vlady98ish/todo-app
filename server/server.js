const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const taskRouter = require('./src/routes/TaskRouter')

//body parser for responses and requests
app.use(express.json())
app.use(cors({
	origin: 'http://localhost:3000'
}))
 app.use('/tasks', taskRouter)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})