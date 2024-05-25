import Fastify from "fastify";
import { routes } from "./route";
import fastifyCors from "@fastify/cors";

const app = Fastify({logger: true})

const start = async() => {

    await app.register(routes);
    
    await app.register(fastifyCors);

    try {
        await app.listen({ port: 3333 });
    } catch (e) {
        process.exit(1);
    }

}

start();