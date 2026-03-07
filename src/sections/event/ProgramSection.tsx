'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { RiArrowDownSLine } from '@remixicon/react'

type ProgramItem = {
    time?: string | null;
    titleSk?: string | null;
    titleEn?: string | null;
    descriptionSk?: string | null;
    descriptionEn?: string | null;
};

type ProgramData = {
    enabled?: boolean | null;
    titleSk?: string | null;
    titleEn?: string | null;
    items?: ProgramItem[] | null;
};

type Props = {
    program: ProgramData;
    locale: string;
};

const ProgramSection = ({ program, locale }: Props) => {
    if (!program.enabled) return null;
    const isSk = locale === 'sk';
    const title = isSk ? program.titleSk : program.titleEn;
    const items = program.items ?? [];

    return (
        <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto mx-5 mt-20 flex flex-col gap-4">
            {title && (
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px]">
                    {title}
                </h2>
            )}
            <div className="flex flex-col">
                {items.map((item, i) => {
                    const itemTitle = isSk ? item.titleSk : item.titleEn;
                    const itemDesc = isSk ? item.descriptionSk : item.descriptionEn;
                    return (
                        <Disclosure key={i} className="border-b border-border" as="div">
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="flex items-center justify-between w-full py-5 text-left group">
                                        <div className="flex items-center gap-6">
                                            {item.time && (
                                                <span className="text-txt-black-sec dark:text-txt-white-sec font-light text-base min-w-[60px]">
                                                    {item.time}
                                                </span>
                                            )}
                                            <span className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-xl text-lg">
                                                {itemTitle}
                                            </span>
                                        </div>
                                        <RiArrowDownSLine
                                            className={`text-txt-black-sec dark:text-txt-white-sec transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}
                                            size={24}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="pb-5">
                                        {itemDesc && (
                                            <p className="font-light text-txt-black-sec dark:text-txt-white-sec md:text-lg text-base ml-0 md:ml-[84px]">
                                                {itemDesc}
                                            </p>
                                        )}
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    );
                })}
            </div>
        </section>
    );
};

export default ProgramSection;