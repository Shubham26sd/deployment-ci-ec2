import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
const connectionString = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL);
if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg({
    connectionString
});
const prismaSingleton = () => {
    return new PrismaClient({ adapter });
};
const client = globalThis.prisma ?? prismaSingleton();
if (process.env.NODE_ENV != "production") {
    globalThis.prisma = client;
}
export { client };
