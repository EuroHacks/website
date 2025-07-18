import { defineCollection, z } from 'astro:content';
import i18nSchema from './i18n';

const organizerCollection = defineCollection({
    type: "data",
    schema: z.object({
        thumb: z.string(),
        country: z.string(),
        fullname: z.string()
    })
});

const eventCollection = defineCollection({
    type: "data",
    schema: z.object({
        logo: z.string(),
        organizers: z.array(z.string()),
        info: z.object({
            participants: z.number(),
            more: z.string().optional(),
            rsvp: z.string(),
            date: z.string().optional(),
            contact: z.object({
                email: z.string(),
                phone: z.string(),
                zoom: z.string(),
                discord: z.string(),
            })
        }),
        images: z.object({
                image: z.string(),
                background: z.string(),
        }),
    })
})

const faqCollection = defineCollection({
    type: "data",
    schema: z.object({
        questions: z.array(z.object(
            {
                question: z.string(),
                answer: z.string()
            }
        ))
    })
});

export const collections = {
    'organizers': organizerCollection,
    'events': eventCollection,
    'faq': faqCollection,
    'i18n': defineCollection({
        type: "data",
        schema: i18nSchema
    })
};