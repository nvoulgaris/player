import express from 'express'
import body_parser from 'body-parser'
import morgan from 'morgan'
import { connect } from './persistence/db.js'

const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))

app.get('/health', (req, res) => {
	res.status(200).send({status: 'up'})
});

export {app}
export const start = async () => {
	try {
		await connect()
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`)
		})
	} catch (e) {
		console.error(`Could not start the application ${e}`)
	}
}
