class Configuration{

    Database(){
        return {
            active: true,
            dialect: "mysql",
            logging: false,
            forceSync: true,
            checkExpiration: 15 * 60 * 1000,
            expiration: 7 * 24 * 60 * 60 * 1000
        }
    }

}

module.exports = new Configuration();