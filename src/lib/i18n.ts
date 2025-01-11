import { getEntry, getCollection } from "astro:content";

export function getPreferredLanguage(Astro: any) {
    return Astro.url.searchParams.get('lang') || Astro.preferredLocale || 'en';
}

export async function getPreferredEntry(Astro: any) {
    const data = await getEntry('i18n', getPreferredLanguage(Astro));
    return data.data;
}