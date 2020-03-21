import express from 'express'
import body_parser from 'body-parser'
import morgan from 'morgan'

const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

export {app}
