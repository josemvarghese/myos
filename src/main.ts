import server from './server';
import * as dotenv from "dotenv";
import { routes } from './presentation/routers';

dotenv.config();
server.get('/v1/health', (req, res) => {
    res.status(200).json({ message: `Server is up and running :) ` })
});
routes(server, `/v1`);
(async () => {
    try {
        /**
         * Start the web server on the specified port.
         */
        server.listen(Number(process.env.PORT), () => console.log("Running on http://localhost:4000"));
    } catch (error: any) {
        console.error("Unable to connect to the database:", error.message);
    }
})()
