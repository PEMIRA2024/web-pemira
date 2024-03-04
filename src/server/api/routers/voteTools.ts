import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const voteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return (
        ctx.db.voteK3M.create({
          data: {
            pil_1: input,
            pil_2: input,
            pil_3: input,
          },
        }),
        ctx.db.voteMWAWM.create({
          data: {
            pil_1: input,
            pil_2: input,
            pil_3: input,
          },
        })
      );
    }),
});
