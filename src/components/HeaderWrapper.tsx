import { getPayload } from "payload";
import config from "@payload-config";
import Header from "@/components/Header";
import type { EventNavItem } from "@/components/Header";

export default async function HeaderWrapper() {
    let events: EventNavItem[] = [];
    try {
        const payload = await getPayload({ config });
        const result = await payload.find({
            collection: 'events',
            depth: 0,
            limit: 50,
            sort: '-year',
        });
        events = result.docs.map((e) => ({
            year: e.year,
            isActive: e.isActive ?? false,
        }));
    } catch {
        // DB may not be ready during build
    }

    return <Header events={events} />;
}