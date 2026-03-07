import HeroHeaderActivator from "@/components/HeroHeaderActivator";
import Button from "@/components/Button";

type MediaObj = {
    url?: string | null;
};

type HeroPrimaryBtn = {
    type?: 'buy-tickets' | 'photos' | 'video' | null;
    labelSk?: string | null;
    labelEn?: string | null;
    href?: string | null;
};

type HeroSecondaryBtn = {
    enabled?: boolean | null;
    labelSk?: string | null;
    labelEn?: string | null;
    href?: string | null;
};

type HeroData = {
    image?: MediaObj | null;
    titleSk?: string | null;
    titleEn?: string | null;
    subtitleSk?: string | null;
    subtitleEn?: string | null;
    primaryBtn?: HeroPrimaryBtn | null;
    secondaryBtn?: HeroSecondaryBtn | null;
};

type Props = {
    hero: HeroData;
    locale: string;
};

const HeroSection = ({ hero, locale }: Props) => {
    const isSk = locale === 'sk';

    const title = isSk ? hero.titleSk : hero.titleEn;
    const subtitle = isSk ? hero.subtitleSk : hero.subtitleEn;

    const primaryLabel = isSk ? hero.primaryBtn?.labelSk : hero.primaryBtn?.labelEn;
    const primaryHref = hero.primaryBtn?.href ?? '#tickets';

    const secondaryLabel = isSk ? hero.secondaryBtn?.labelSk : hero.secondaryBtn?.labelEn;
    const secondaryHref = hero.secondaryBtn?.href ?? '/support';

    const bgImage = hero.image && typeof hero.image === 'object'
        ? (hero.image as MediaObj).url ?? '/images/support/hero.png'
        : '/images/support/hero.png';

    return (
        <section
            className="relative w-full h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
        >
            <HeroHeaderActivator theme="dark" />
            <div className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto h-full mx-5 flex flex-col gap-6 justify-center">
                <div className="max-w-[540px] flex flex-col gap-6">
                    {title && (
                        <h1 className="font-medium text-txt-white-prim md:text-[40px] text-[32px] leading-tight">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="font-light text-txt-white-prim md:text-xl text-lg">
                            {subtitle}
                        </p>
                    )}
                    <div className="flex flex-wrap gap-4 items-start">
                        {primaryLabel && (
                            <Button
                                text={primaryLabel}
                                variant="primary"
                                className="hover:!text-txt-black-prim hover:!bg-white"
                                href={primaryHref}
                            />
                        )}
                        {hero.secondaryBtn?.enabled && secondaryLabel && (
                            <Button
                                className="!text-txt-white-prim"
                                text={secondaryLabel}
                                variant="secondary"
                                href={secondaryHref}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;