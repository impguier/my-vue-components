import config from './rollup.config'

import Server from 'rollup-plugin-serve'

let devConfig = {
    plugins: {
        server({
            port,
            // contentBase:''
        })
    }
}
export default Object.assign(config, devConfig)