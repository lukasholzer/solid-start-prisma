import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

await db.post.create({ data: { title: 'Hello world' } });

const allPosts = await db.post.findMany();

console.dir(allPosts);
