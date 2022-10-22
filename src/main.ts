import server from './server';
import * as dotenv from "dotenv";
import { routes } from './presentation/routers';
import { connect } from './config/mongo';
import * as swaggerUi from "swagger-ui-express";
import sequelizeConnection from './config/postgresdb';
const swaggerDocument = require('./../swagger.json');
dotenv.config();
server.get('/v1/health', (req, res) => {
    res.status(200).json({ message: `Server is up and running :) ` })
});
server.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes(server, `/v1`);
(async () => {
    try {
        /**
         * Start the web server on the specified port.
         */
        await sequelizeConnection.authenticate();
        server.listen(Number(process.env.PORT), () => {
            connect(); //DB connection mongo
            console.log("Running on http://localhost:4000")
        });
    } catch (error: any) {
        console.error("Unable to connect to the database:", error.message);
    }
})()
