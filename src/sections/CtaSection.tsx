import { getPayload } from 'payload';
import config from '@payload-config';
import Newsletter from '@/sections/newsletter';
import BuyTicketsCta from '@/sections/buyTicketsCta';

const CtaSection = async () => {
    const payload = await getPayload({ config });
    const settings = await payload.findGlobal({ slug: 'site-settings' });

    if (settings.ctaSection === 'buyTickets') {
        return <BuyTicketsCta />;
    }

    if (settings.ctaSection === 'newsletter') {
        return <Newsletter />;
    }

    return null;
};

export default CtaSection;

