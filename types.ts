import { z } from "zod";

const MAX_IMPUT_TOKEN = 1000;

const CreativeChatSchema = z.object({
    message: z.string().max(MAX_IMPUT_TOKEN)
})