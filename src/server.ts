import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify()
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    const habits = prisma.habit.findMany()
    return habits
})

app.listen({
    port: 3000,
}).then(() => {
    console.log('listening on port 3000')
});