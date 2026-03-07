"use client"

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/ui/Logo";
import { RiMenuFill, RiCloseFill, RiArrowDownSLine } from "@remixicon/react";
import { useHeader } from "@/context/HeaderContext";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export type EventNavItem = {
    year: number;
    isActive: boolean;
};

type HeaderProps = {
    events?: EventNavItem[];
};

const Header = ({ events = [] }: HeaderProps) => {
    const t = useTranslations('Header');

    const allEvents = [...events].sort((a, b) => b.year - a.year);
    const showEventsMenu = allEvents.length > 1;

    const links = [
        { href: "/blog", label: t('blog') },
        { href: "/support", label: t('support') },
        { href: "/team", label: t('team') },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { transparent, theme } = useHeader();
    const eventsRef = useRef<HTMLDivElement>(null);

    const isOverImage = transparent;
    const textColorClass = isOverImage
        ? theme === "light" ? "text-txt-black-prim" : "text-txt-white-prim"
        : "text-txt-black-prim dark:text-txt-white-prim";
    const iconColorClass = isOverImage
        ? theme === "light" ? "text-txt-black-prim" : "text-white"
        : "text-txt-black-prim dark:text-txt-white-prim";

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => { handleScroll(); ticking = false; });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledHandleScroll);
        return () => window.removeEventListener("scroll", throttledHandleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isOverImage ? "bg-transparent" : "bg-white dark:bg-[#1F1E1E]"}`}>
            <div className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 flex justify-between items-center lg:my-6 my-5">
                <Link href="/">
                    <Logo
                        width={215}
                        height={24}
                        style={isOverImage && theme !== "light" ? { color: "white", ["--logo-ink" as string]: "white" } : undefined}
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="lg:flex hidden items-center gap-7">
                    {showEventsMenu && (
                        <div
                            ref={eventsRef}
                            className="relative"
                            onMouseEnter={() => setEventsOpen(true)}
                            onMouseLeave={() => setEventsOpen(false)}
                        >
                            <button className={`flex items-center gap-1 ${textColorClass} hover:text-red font-light text-xl transition-colors duration-300 outline-none cursor-pointer`}>
                                {t('editions')}
                                <RiArrowDownSLine size={18} className={`mt-0.5 transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {eventsOpen && (
                                <div className="absolute top-full left-0 pt-2 min-w-[130px] z-50">
                                    <div className="bg-white dark:bg-[#1F1E1E] border border-border shadow-lg flex flex-col py-2">
                                        {allEvents.map((e) => (
                                            <Link
                                                key={e.year}
                                                href={`/${e.year}`}
                                                className="px-4 py-2 text-txt-black-prim dark:text-txt-white-prim hover:text-red font-light text-lg transition-colors duration-200 flex items-center gap-2"
                                            >
                                                {e.year}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className={`${textColorClass} hover:text-red font-light text-xl transition-colors duration-300`}>
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher textColorClass={textColorClass} />
                </nav>

                <RiMenuFill className={`lg:hidden block cursor-pointer ${iconColorClass}`} size={28} onClick={() => setIsMenuOpen(true)} />

                {isMenuOpen && ReactDOM.createPortal(
                    <>
                        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsMenuOpen(false)} />
                        <div className="fixed inset-0 flex flex-col gap-6 justify-start items-center h-screen w-screen z-50">
                            <div className="flex justify-between items-center w-full p-5 mb-10">
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <Logo width={215} height={24} />
                                </Link>
                                <RiCloseFill className="cursor-pointer" size={28} onClick={() => setIsMenuOpen(false)} />
                            </div>
                            {showEventsMenu && (
                                <div className="flex flex-col items-center gap-3">
                                    <span className={`font-light text-xl ${textColorClass}`}>{t('editions')}</span>
                                    {allEvents.map((e) => (
                                        <Link
                                            key={e.year}
                                            href={`/${e.year}`}
                                            className="text-txt-black-prim dark:text-txt-white-prim hover:text-red text-xl font-light transition-colors duration-300 flex items-center gap-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {e.year}
                                            {e.isActive && <span className="text-xs text-red">●</span>}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            {links.map((link) => (
                                <Link key={link.href} href={link.href} className="text-txt-black-prim dark:text-txt-white-prim hover:text-red text-xl font-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                            <LanguageSwitcher />
                        </div>
                    </>,
                    document.body
                )}
            </div>
        </header>
    );
};

export default Header;