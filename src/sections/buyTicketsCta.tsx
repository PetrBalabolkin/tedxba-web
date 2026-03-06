import Input from "@/components/Input";
import Button from "@/components/Button";
import { getTranslations } from "next-intl/server";

const BuyTicketsCta = async () => {
    const t = await getTranslations('Newsletter');
    return (
        <section className="xl:w-[1300px] lg:w-[980px] lg:mx-auto w-auto mx-5 flex flex-col md:gap-6 gap-5 md:mt-25 mt-15 md:py-25 py-15 xl:px-15 lg:px-5 lg:border border-y border-border">
            <h2 className="font-medium md:text-[40px] text-[32px] text-txt-black-prim dark:text-txt-white-prim leading-tight">
                Vaše miesto v sále na vás čaká
            </h2>
            <p className="text-xl font-light text-txt-black-sec dark:text-txt-white-sec max-w-[800px]">
                TEDxBratislava je každý rok iné — iní rečníci, iné témy, rovnaká energia. Príďte to zažiť osobne.
            </p>
            <Button
                text="Kúpiť lístok"
                variant="primary"
                type="submit"
                href="/#tickets"
            />
        </section>
    );
};

export default BuyTicketsCta;