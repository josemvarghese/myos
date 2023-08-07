import app from './server';
import * as dotenv from "dotenv";
import { routes } from './presentation/routers';
import { connect } from './config/mongo';
import * as swaggerUi from "swagger-ui-express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from './graphQL/typeDefinitions';
import resolvers from './graphQL/resolver';
const swaggerDocument = require('./../swagger.json');
dotenv.config();
app.get('/v1/health', (req, res) => {
    res.status(200).json({ message: `Server is up and running :) ` })
});
const isProduction = process.env.NODE_ENV === "production";
// const playground = {
//     "settings": {
//         "editor.theme": "light",
//     }
// }
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: !isProduction, // Enable introspection in development, disable in production
});

app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes(app, `/v1`);
(async () => {
    try {
        /**
         * Start the web app on the specified port.
         */
        await apolloServer.start()
        apolloServer.applyMiddleware({ app });
        app.listen(Number(process.env.PORT), () => {
            connect(); //DB connection mongo
            console.log(`Running on http://localhost:${process.env.PORT}`)
        });
    } catch (error: any) {
        console.error("Unable to connect to the database:", error.message);
    }
})()