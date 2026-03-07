import SpeakerCard from "@/components/ui/SpeakerCard";

type MediaObj = {
    url?: string | null;
};

type SpeakerItem = {
    name: string;
    descriptionSk?: string | null;
    descriptionEn?: string | null;
    img?: MediaObj | null;
};

type SpeakersData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    items?: SpeakerItem[] | null;
};

type Props = {
    speakers: SpeakersData;
    locale: string;
};

const SpeakersSection = ({ speakers, locale }: Props) => {
    if (!speakers.enabled) return null;
    const isSk = locale === 'sk';
    const title = isSk ? speakers.titleSk : speakers.titleEn;
    const items = speakers.items ?? [];

    return (
        <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20 flex flex-col gap-3">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px]">
                    {title}
                </h2>
            )}
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {items.map((speaker, i) => {
                    const imgUrl = speaker.img && typeof speaker.img === 'object'
                        ? (speaker.img as MediaObj).url ?? undefined
                        : undefined;
                    const description = isSk ? speaker.descriptionSk : speaker.descriptionEn;
                    return (
                        <SpeakerCard
                            key={i}
                            name={speaker.name}
                            description={description ?? ''}
                            img={imgUrl}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default SpeakersSection;