import { defineCollection, z as zod } from "astro:content";
import { text } from "darkmatter";

const about = defineCollection({
  type: "content",
  schema: zod.object({
    title: zod.string(),
    description: zod.string(),
    cardText: text(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: zod.object({
    title: zod.string(),
    description: zod.string(),
    cardText: text(),
  }),
});

export const collections = {
  about,
  services,
};
