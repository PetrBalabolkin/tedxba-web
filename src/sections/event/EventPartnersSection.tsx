import PartnerCard from "@/components/ui/PartnerCard";

type MediaObj = {
    url?: string | null;
};

type PartnerItem = {
    id: string | number;
    name: string;
    logo?: MediaObj | number | null;
    web?: string | null;
};

type Category = {
    slug: string;
    labelSk: string;
    labelEn: string;
    partners?: (PartnerItem | number | string)[] | null;
};

type PartnersSectionData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    categories?: Category[] | null;
};

type Props = {
    partnersSection: PartnersSectionData;
    locale: string;
};

const EventPartnersSection = ({ partnersSection, locale }: Props) => {
    if (!partnersSection.enabled) return null;

    const isSk = locale === 'sk';
    const title = isSk ? partnersSection.titleSk : partnersSection.titleEn;
    const categories = (partnersSection.categories ?? []).filter(
        (cat) => Array.isArray(cat.partners) && cat.partners.length > 0
    );

    if (categories.length === 0) return null;

    return (
        <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20 mb-20 flex flex-col gap-10">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px]">
                    {title}
                </h2>
            )}
            {categories.map((cat) => {
                const catLabel = isSk ? cat.labelSk : cat.labelEn;
                const partners = (cat.partners ?? []).filter(
                    (p): p is PartnerItem => typeof p === 'object' && p !== null && 'name' in p
                );

                return (
                    <div key={cat.slug} className="flex flex-col gap-4">
                        <h3 className="font-medium text-txt-black-sec dark:text-txt-white-sec md:text-2xl text-xl">
                            {catLabel}
                        </h3>
                        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                            {partners.map((partner) => {
                                const logoUrl =
                                    typeof partner.logo === 'object' && partner.logo !== null
                                        ? (partner.logo as MediaObj).url ?? ''
                                        : '';
                                return (
                                    <PartnerCard
                                        key={partner.id}
                                        name={partner.name}
                                        logo={logoUrl}
                                        web={partner.web ?? undefined}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default EventPartnersSection;
