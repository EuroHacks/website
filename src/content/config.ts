import { defineCollection, z } from 'astro:content';

const langOrganizerTranslation = z.object({
    fullname: z.string(),
    description: z.string()
});

const langEventTranslation = z.object({
    welcome: z.string(),
    organizers: z.string(),
    translation: z.string(),
    info: z.object({
        header: z.string(),
        dates: z.string(),
        participants: z.string(),
        zoom: z.string(),
        contact: z.object({
            email: z.string(),
            phone: z.string()
        })
    }),
    announcements: z.object({
        header: z.string(),
        data: z.string()
    }),
    food: z.object({
        header: z.string(),
        data: z.string()
    }),
    stay: z.object({
        header: z.string(),
        data: z.string()
    }),
    transit: z.object({
        header: z.string(),
        data: z.string()
    })
})

const organizerCollection = defineCollection({
    type: "data",
    schema: z.object({
        thumb: z.string(),
        country: z.string(),
        lang: z.object({
            origin: langOrganizerTranslation,
            en: langOrganizerTranslation
        })
    })
});

const eventCollection = defineCollection({
    type: "data",
    schema: z.object({
        logo: z.string(),
        organizers: z.array(z.string()),
        info: z.object({
            location: z.string(),
            dates: z.string(),
            participants: z.number(),
            zoom: z.string(),
            contact: z.object({
                email: z.string(),
                phone: z.string()
            })
        }),
        lang: z.object({
            origin: langEventTranslation,
            en: langEventTranslation
        })
    })
})

export const collections = {
    'organizers': organizerCollection,
    'events': eventCollection
};