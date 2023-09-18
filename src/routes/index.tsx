import { useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { PrismaClient } from '@prisma/client/edge';

export function routeData() {
  return createServerData$(async (_, { request }) => {
    try {
      const db = new PrismaClient();
      const posts = await db.post.findMany();
      console.log(posts);
      return posts;
    } catch (e) {
      console.error(e);
      return [];
    }
  });
}

export default function Home() {
  const posts = useRouteData<typeof routeData>();
  return (
    <main class="full-width">
      <h1>All Posts</h1>
      <pre>{JSON.stringify({ posts: posts() }, null, 2)}</pre>
    </main>
  );
}
