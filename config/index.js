const path = require('path');


module.exports = {
    paths: {
        'frontend': path.normalize(`${process.cwd()}/frontend`),
        'public': path.normalize(`${process.cwd()}/public`)
    }
}
