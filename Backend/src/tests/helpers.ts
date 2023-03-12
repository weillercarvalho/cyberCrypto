import prisma from "../database/db.js";

export async function cleanDb() {
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});

}