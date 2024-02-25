import { createTRPCRouter } from "~/server/api/trpc";
import { inputNimRouter } from "~/server/api/routers/inputNim";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  inputNim: inputNimRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
