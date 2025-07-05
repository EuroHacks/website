import { z } from 'astro:content';

const schema = z.object({
    'home.warning': z.string(),
    'home.vision.title': z.string(),
    'home.vision.text': z.string(),
    'home.vision.button': z.string(),
    'home.info.duration': z.string(),
    'home.info.eventnum': z.string(),
    'home.events.joinus': z.string(),
    'home.events.learnmore': z.string(),
    'home.faq.title': z.string(),

    'hackathon.welcome': z.string(),
    'hackathon.organizers': z.string(),
    'hackathon.info.header': z.string(),
    'hackathon.info.dates': z.string(),
    'hackathon.info.location': z.string(),
    'hackathon.info.participants': z.string(),
    'hackathon.info.participants_TBA': z.string(),
    'hackathon.info.zoomlink': z.string(),
    'hackathon.info.contact.email': z.string(),
    'hackathon.info.contact.phone': z.string(),
    'hackathon.announcements.header': z.string(),
    'hackathon.announcements.text': z.string(),
    'hackathon.food.header': z.string(),
    'hackathon.food.text': z.string(),
    'hackathon.transit.header': z.string(),
    'hackathon.transit.text': z.string(),
    
    'event.online.country': z.string(),
    'event.online.province': z.string(),
    'event.online.city': z.string(),
    'event.online.title': z.string(),

    'event.poland.country': z.string(),
    'event.poland.province': z.string(),
    'event.poland.city': z.string(),
    'event.poland.title': z.string(),

    'event.spain.country': z.string(),
    'event.spain.province': z.string(),
    'event.spain.city': z.string(),
    'event.spain.title': z.string(),

    'event.uk.country': z.string(),
    'event.uk.province': z.string(),
    'event.uk.city': z.string(),
    'event.uk.title': z.string(),
    
    'event.greece.country': z.string(),
    'event.greece.province': z.string(),
    'event.greece.city': z.string(),
    'event.greece.title': z.string(),

    'event.italy.country': z.string(),
    'event.italy.province': z.string(),
    'event.italy.city': z.string(),
    'event.italy.title': z.string(),

    'footer.contacts': z.string(),
    'footer.email.main': z.string(),
    'footer.email.questions': z.string(),

    'faqs': z.array(z.object({
        question: z.string(),
        answer: z.string()
    })),

    'about': z.array(z.object({
        title: z.string(),
        text: z.string(),
        image: z.string(),
        modal: z.object({
            title: z.string(),
            text: z.string()
        })
    })),

    "organizers.Bartosz_Budnik.bio": z.string(),
    "organizers.Christos_Tsichrinis.bio": z.string(),
    "organizers.Felix_Myrie.bio": z.string(),
    "organizers.Giacomo_Radaelli.bio": z.string(),
    "organizers.Karl_Wünsche.bio": z.string(),
    "organizers.Leonard_Stegle.bio": z.string(),
    "organizers.Marios_Mitsios.bio": z.string(),
    "organizers.Massimiliano_Bruchi.bio": z.string(),
    "organizers.Max_Schneider.bio": z.string(),
    "organizers.Max_Thorste.bio": z.string(),
    "organizers.Nikos_Tsilas.bio": z.string(),
    "organizers.Ole_Fleck.bio": z.string(),
    "organizers.Samuel_Leber.bio": z.string(),
    "organizers.Shambhavi_Sinha.bio": z.string(),
    "organizers.Thomas_Price.bio": z.string(),
    "organizers.Victorio_Medina.bio": z.string()
})

export default schema;