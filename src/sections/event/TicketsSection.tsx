type TicketsData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    iframeCode?: string | null;
};

type Props = {
    tickets: TicketsData;
    locale: string;
};

const TicketsSection = ({ tickets, locale }: Props) => {
    if (!tickets.enabled) return null;
    const title = locale === 'sk' ? tickets.titleSk : tickets.titleEn;
    return (
        <section id="tickets" className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20 flex flex-col gap-5">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px]">
                    {title}
                </h2>
            )}
            {tickets.iframeCode ? (
                <div className="w-full" dangerouslySetInnerHTML={{ __html: tickets.iframeCode }} />
            ) : (
                <div className="w-full h-32 flex items-center justify-center border border-border text-txt-black-sec dark:text-txt-white-sec">
                    No iframe configured
                </div>
            )}
        </section>
    );
};

export default TicketsSection;