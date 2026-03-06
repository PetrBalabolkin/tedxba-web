type partnerCardProps = {
    name: string;
    logo: string;
    web?: string;
}

const PartnerCard = (
    {
        name,
        logo,
        web
    } : partnerCardProps
) => {
    return (
        <a href={web} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-border aspect-square">
            <img className="w-25 h-25 object-cover" src={logo} alt={name} />
        </a>
    )
}

export default PartnerCard;