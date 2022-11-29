const Sequelize 		= require('sequelize')
const session			= require('express-session')
const SequelizeStore 	= require("connect-session-sequelize")(session.Store);
const Config 			= require('./Config')
const dotenv        	= require('dotenv').config()


class Database {

   async SequelizeConnection() {

		if(Config.Database().active == true){

			const connectionDatabase = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD+'#', {
				host: process.env.DATABASE_HOST,
				dialect: Config.Database().dialect,
				logging: Config.Database().logging,
			 })

			 connectionDatabase.define("Session", {sid: {type: Sequelize.STRING, primaryKey: true}, expires: Sequelize.DATE, data: Sequelize.TEXT,}).sync({force: Config.Database().forceSync});

			 function extendDefaultFields(defaults, session) {
				return {
				   data: defaults.data,
				   expires: defaults.expires,
				   userId: session.userId,
				};
			 }

			connectionDatabase.authenticate()
							  .then(() => {console.log("Database Connected!");})
							  .catch((err) => {console.log("Database Error: " + err);});

			const store = new SequelizeStore({
				db: connectionDatabase,
				table: "Session",
				extendDefaultFields: extendDefaultFields,
				checkExpirationInterval: Config.Database().checkExpiration,
				expiration: Config.Database().expiration
			})

		}

   }

}

module.exports = new Database();