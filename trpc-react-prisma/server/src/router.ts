import z from "zod";
import { publicProcedure, router } from "./trpc";
import { prisma } from "../prisma";

interface Something {
	id: number;
	name: string;
}

const appRouter = router({
	helloWorld: publicProcedure.query((req) => {
		return "Hello World";
	}),
	items: publicProcedure.query(async () => {
		const items = await prisma.item.findMany({
      orderBy: {
        id: 'desc',
      },
    })
		return items;
	}),
	createItem: publicProcedure
		.input(
			z.object({
				name: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const item = await prisma.item.create({
				data: input,
			});
			return item;
		}),
});

export type AppRouter = typeof appRouter;
export default appRouter;
