import { createTRPCRouter } from "~/server/api/trpc";
import { voteRouter } from "./routers/voteTools";
=======
import { inputNimRouter } from "~/server/api/routers/inputNim";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  voteTools: voteRouter,
  inputNim: inputNimRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
