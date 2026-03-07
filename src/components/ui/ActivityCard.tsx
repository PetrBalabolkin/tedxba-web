import { RemixiconComponentType } from "@remixicon/react";

type CardProps = {
    title: string;
    description: string;
    icon: RemixiconComponentType
}

const ActivityCard = (
    {
        title,
        description,
        icon: Icon,
    }: CardProps
) => {
    return (
        <div className="flex flex-col gap-4 dashed-border-br">
            <Icon size={64} className="m-1 dark:text-txt-white-prim text-txt-black-prim" />
            <div className="flex flex-col gap-2">
                <h3 className="sm:text-2xl text-xl font-medium dark:text-txt-white-prim text-txt-black-prim">
                    {title}
                </h3>
                <p className="sm:text-lg font-light text-base dark:text-txt-white-sec text-txt-black-sec">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ActivityCard;