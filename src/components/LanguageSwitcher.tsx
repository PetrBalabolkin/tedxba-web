"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { RiGlobalLine } from "@remixicon/react";

interface Props {
    textColorClass?: string;
}

const LanguageSwitcher = ({ textColorClass }: Props) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const nextLocale = locale === "sk" ? "en" : "sk";

    const switchLocale = () => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    const colorClass = textColorClass ?? "text-txt-black-prim dark:text-txt-white-prim";

    return (
        <button
            onClick={switchLocale}
            disabled={isPending}
            aria-label={`Switch to ${nextLocale === "en" ? "English" : "Slovenčina"}`}
            className={`flex items-center gap-1.5 font-light text-xl transition-colors duration-300 hover:text-red ${colorClass} ${isPending ? "opacity-50" : ""}`}
        >
            <RiGlobalLine size={20} />
            <span className="uppercase">{nextLocale}</span>
        </button>
    );
};

export default LanguageSwitcher;
