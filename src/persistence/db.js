import { config } from '../config/dev.js'
import mongoose from 'mongoose'

export const connect = (url = config.dbUrl, opts = {}) => {
	return mongoose.connect(
		url,
		{ ...opts, useNewUrlParser: true }
	)
}
