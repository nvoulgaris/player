import config from '../config/index.js'
import mongoose from 'mongoose'

export const connect = (url = config.dbUrl, opts = {}) => {
	return mongoose.connect(
		url,
		{ ...opts, useNewUrlParser: true }
	)
}
