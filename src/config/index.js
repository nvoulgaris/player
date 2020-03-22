import lodash from 'lodash'
import { devConfig } from './dev.js'
import { testingConfig } from './testing.js'

const env = process.env.NODE_ENV || 'dev'

const baseConfig = {
	env,
	port: 3000
}

let envConfig = {}

switch (env) {
	case 'dev':
		envConfig = devConfig
		break
	case 'testing':
		envConfig = testingConfig
		break
	default:
		envConfig = devConfig
}

export default lodash.merge(baseConfig, envConfig)
