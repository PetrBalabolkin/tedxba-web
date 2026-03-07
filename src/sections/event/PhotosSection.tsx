type PhotosData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    iframeCode?: string | null;
};

type Props = {
    photos: PhotosData;
    locale: string;
};

const PhotosSection = ({ photos, locale }: Props) => {
    if (!photos.enabled) return null;

    const title = locale === 'sk' ? photos.titleSk : photos.titleEn;

    return (
        <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px] mb-8">
                    {title}
                </h2>
            )}
            {photos.iframeCode ? (
                <div className="w-full" dangerouslySetInnerHTML={{ __html: photos.iframeCode }} />
            ) : (
                <div className="w-full h-32 flex items-center justify-center border border-border text-txt-black-sec dark:text-txt-white-sec">
                    No Flickr embed configured
                </div>
            )}
        </section>
    );
};

export default PhotosSection;