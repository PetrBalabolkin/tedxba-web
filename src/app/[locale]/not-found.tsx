import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Button from "@/components/Button";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await
        getTranslations({ locale, namespace: 'NotFoundPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

const NotFound = () => {
    const t = useTranslations('NotFoundPage');
    return (
        <>
            <style
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: `
                        body > div > header,
                        body > div > footer,
                        header,
                        footer {
                            display: none !important;
                            visibility: hidden !important;
                        }
                    `
                }}
            />
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex flex-col mx-5 sm:w-[500px] w-full items-start gap-10">
                    <span className="text-9xl text-txt-black-prim dark:text-txt-white-prim font-bold w-fit">:(</span>
                    <div className="flex flex-col gap-5 items-start">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-medium text-txt-black-prim dark:text-txt-white-prim">{t('title')}</h1>
                            <span className="font-light text-txt-black-sec dark:text-txt-white-sec text-xl">{t('subtitle')}</span>
                        </div>
                        <Button href='/' text={t('btn')} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default NotFound;