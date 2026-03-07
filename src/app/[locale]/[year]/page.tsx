import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { getLocale } from "next-intl/server";

import HeroSection from "@/sections/event/HeroSection";
import TicketsSection from "@/sections/event/TicketsSection";
import SpeakersSection from "@/sections/event/SpeakersSection";
import ProgramSection from "@/sections/event/ProgramSection";
import ActivitiesSection from "@/sections/event/ActivitiesSection";
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


    return (
        <>
            {event.hero && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <HeroSection hero={event.hero as any} locale={locale} />
            )}
            {event.tickets && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <TicketsSection tickets={event.tickets as any} locale={locale} />
            )}
            {event.speakers && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <SpeakersSection speakers={event.speakers as any} locale={locale} />
            )}
            {event.program && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <ProgramSection program={event.program as any} locale={locale} />
            )}
            {event.activities && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <ActivitiesSection activities={event.activities as any} locale={locale} />
            )}
            {event.partnersSection && (
                <EventPartnersSection
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    partnersSection={event.partnersSection as any}
                    locale={locale}
                />
            )}
        </>
    );
}

