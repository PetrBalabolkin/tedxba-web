import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    text: string;
    variant?: ButtonVariant;
    href?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-red text-txt-white-prim hover:bg-black active:bg-black disabled:bg-[#E3DFE0] disabled:text-[#6F494F] disabled:cursor-not-allowed",
    secondary:
        "bg-transparent border border-red text-txt-black-prim dark:text-txt-white-prim hover:bg-red hover:text-txt-white-prim active:bg-red disabled:border-[#E3DFE0] disabled:text-[#6F494F] disabled:cursor-not-allowed",
};

const base =
    "inline-flex items-center justify-center px-6 py-3 md:text-xl text-lg font-light leading-none transition-colors duration-200 rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2";

const Button = ({
    text,
    variant = "primary",
    href,
    className = "",
    type = "button",
    disabled = false,
}: ButtonProps) => {
    const styles = `${base} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} disabled={disabled} className={styles}>
            {text}
        </button>
    );
};

export default Button;