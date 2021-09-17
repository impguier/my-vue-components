const path = require('path')
function pathResolve(p) {
    return path.resolve(__dirname, p)
}
module.exports = {
    pathResolve
}