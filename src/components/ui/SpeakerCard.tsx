type OrganizerCardProps = {
    name: string;
    description: string;
    img?: string;
}

const SpeakerCard = (
    {
        name,
        description,
        img,
    } : OrganizerCardProps
) => {
    return (
        <div className="flex flex-col">
            <img
                src={img ?? "/placeholder.png"}
                alt={name}
                className="h-[360px] w-full object-cover"
            />
            <div className="flex gap-3 mt-3">
                <div className="flex flex-col gap-1">
                    <h3 className="font-medium md:text-xl text-lg dark:text-txt-white-prim text-txt-black-prim">
                        {name}
                    </h3>
                    <p className="font-light text-base dark:text-txt-white-sec text-txt-black-sec">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpeakerCard;