
import z from 'zod';
import { publicProcedure, router } from "./trpc";

interface Something {
  id: number;
  name: string;
}


const appRouter = router({
  helloWorld: publicProcedure.query((req) => {
    return "Hello World";
  }),
  createSomething: publicProcedure.input(z.object({ name: z.string() }))
    .mutation((req) => {
      const s = Math.random();
      const sm: Something = { id: s, name: req.input.name };
      return sm;
    }),
});


export type AppRouter = typeof appRouter;
export default appRouter;