import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { getLocale } from "next-intl/server";

import HeroSection from "@/sections/event/HeroSection";
import TicketsSection from "@/sections/event/TicketsSection";
import SpeakersSection from "@/sections/event/SpeakersSection";
import ProgramSection from "@/sections/event/ProgramSection";
import ActivitiesSection from "@/sections/event/ActivitiesSection";
import PhotosSection from "@/sections/event/PhotosSection";
import EventPartnersSection from "@/sections/event/EventPartnersSection";

type Props = {
    params: Promise<{ locale: string; year: string }>;
};

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config });
        const result = await payload.find({ collection: 'events', limit: 100, depth: 0 });
        return result.docs.map((e) => ({ year: String(e.year) }));
    } catch {
        return [];
    }
}

export default async function EventYearPage({ params }: Props) {
    const { year } = await params;

    if (!/^\d{4}$/.test(year)) return notFound();

    const locale = await getLocale();
    const payload = await getPayload({ config });

    const result = await payload.find({
        collection: 'events',
        where: { year: { equals: parseInt(year) } },
        depth: 2,
        limit: 1,
    });

    const event = result.docs[0];
    if (!event) return notFound();

    const e = event as Record<string, unknown>;

    return (
        <>
            {e.hero && <HeroSection hero={e.hero as never} locale={locale} />}
            {e.tickets && <TicketsSection tickets={e.tickets as never} locale={locale} />}
            {e.speakers && <SpeakersSection speakers={e.speakers as never} locale={locale} />}
            {e.program && <ProgramSection program={e.program as never} locale={locale} />}
            {e.activities && <ActivitiesSection activities={e.activities as never} locale={locale} />}
            {e.photos && <PhotosSection photos={e.photos as never} locale={locale} />}
            {e.partnersSection && <EventPartnersSection partnersSection={e.partnersSection as never} locale={locale} />}
        </>
    );
}