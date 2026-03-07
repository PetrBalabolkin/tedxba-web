import { getPayload } from "payload";
import config from "@payload-config";
import { getLocale } from "next-intl/server";
import Newsletter from "@/sections/newsletter";

import HeroSection from "@/sections/event/HeroSection";
import TicketsSection from "@/sections/event/TicketsSection";
import SpeakersSection from "@/sections/event/SpeakersSection";
import ProgramSection from "@/sections/event/ProgramSection";
import ActivitiesSection from "@/sections/event/ActivitiesSection";
import PhotosSection from "@/sections/event/PhotosSection";
import EventPartnersSection from "@/sections/event/EventPartnersSection";

export default async function Home() {
    const locale = await getLocale();
    const payload = await getPayload({ config });

    const result = await payload.find({
        collection: 'events',
        where: { isActive: { equals: true } },
        depth: 2,
        limit: 1,
    });

    const event = result.docs[0];


    if (!event) {
        return (
            <main className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 flex items-center justify-center min-h-[60vh]">
                <p className="text-txt-black-sec dark:text-txt-white-sec text-xl font-light">
                    No active event configured.
                </p>
            </main>
        );
    }

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
            {event.photos && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <PhotosSection photos={event.photos as any} locale={locale} />
            )}
            {event.partnersSection && (
                <EventPartnersSection
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    partnersSection={event.partnersSection as any}
                    locale={locale}
                />
            )}
            <Newsletter />
        </>
    );
}