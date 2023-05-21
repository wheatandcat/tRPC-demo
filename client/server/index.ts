import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";

type User = {
  id: string;
  name: string;
};

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users: User[] = [
      {
        id: "1",
        name: "John Doe",
      },
    ];

    return users;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
