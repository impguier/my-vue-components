import config from './rollup.config'

import Server from 'rollup-plugin-serve'
const port = 3000
let devConfig = {
    plugins: [
        ...config.plugins,
        Server({
            port,
            // contentBase:''
        })
    ]
}
export default Object.assign(config, devConfig)