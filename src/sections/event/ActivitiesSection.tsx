type MediaObj = {
    url?: string | null;
};

type ActivityItem = {
    titleSk?: string | null;
    titleEn?: string | null;
    descriptionSk?: string | null;
    descriptionEn?: string | null;
    image?: MediaObj | null;
};

type ActivitiesData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    items?: ActivityItem[] | null;
};

type Props = {
    activities: ActivitiesData;
    locale: string;
};

const ActivitiesSection = ({ activities, locale }: Props) => {
    if (!activities.enabled) return null;
    const isSk = locale === 'sk';
    const title = isSk ? activities.titleSk : activities.titleEn;
    const items = activities.items ?? [];

    return (
        <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px] mb-8">
                    {title}
                </h2>
            )}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {items.map((item, i) => {
                    const itemTitle = isSk ? item.titleSk : item.titleEn;
                    const itemDesc = isSk ? item.descriptionSk : item.descriptionEn;
                    const imgUrl = item.image && typeof item.image === 'object'
                        ? (item.image as MediaObj).url ?? undefined
                        : undefined;
                    return (
                        <div key={i} className="flex flex-col gap-4">
                            {imgUrl && (
                                <img
                                    src={imgUrl}
                                    alt={itemTitle ?? ''}
                                    className="w-full h-[280px] object-cover"
                                />
                            )}
                            <div className="flex flex-col gap-2">
                                {itemTitle && (
                                    <h3 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-xl text-lg">
                                        {itemTitle}
                                    </h3>
                                )}
                                {itemDesc && (
                                    <p className="font-light text-txt-black-sec dark:text-txt-white-sec text-base">
                                        {itemDesc}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ActivitiesSection;