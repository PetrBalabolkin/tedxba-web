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
            <Newsletter />
        </>
    );
}