const expressConfiguration      = require('../config/Express')
const InitializedDatabase       = require('../config/Database')

class StartConfiguration{

    async Initialize(){
        expressConfiguration.App();
        expressConfiguration.startApp();
        InitializedDatabase.SequelizeConnection();
    }

}

module.exports = new StartConfiguration();