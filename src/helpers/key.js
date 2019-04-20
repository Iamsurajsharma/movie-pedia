if(process.env.NODE_ENV === 'production'){
    module.exports = require('../helpers/keysProd')
}
else{
    module.exports = require('../helpers/keysDev')
}