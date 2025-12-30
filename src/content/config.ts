import { defineCollection, z } from "astro:content";

const f1Cars = defineCollection({
    schema: z.object({
        nombre: z.string(),
        escuderia: z.string(),
        año: z.number(),
        pilotos: z.array(z.string()),
        motor: z.string(),
        campeonatos_constructores: z.number(),
        campeonatos_pilotos: z.number(),
        victorias: z.number(),
        pole_positions: z.number(),
        img: z.string()
    })
})
export const collections = { f1Cars }