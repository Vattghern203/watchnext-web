type ButtonVariant = "ghost" | "cta" | "secondary" | "primary" | "default";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    variant: ButtonVariant;
    children?: React.ReactNode;
    onClick?: () => void;
}

const buttonStyles = {

    primary: 'bg-emerald-500 hover:bg-emerald-700 text-white',
    secondary: 'bg-emerald-800 hover:bg-emerald-900 text-white',
    ghost: 'bg-transparent hover:bg-emerald-800 hover:bg-emerald-900 text-white',
}

const createButton = (variant: ButtonVariant) => {

    return ({ onClick, children }: Omit<ButtonProps, 'variant'>) => (

        <button
            className={`p-2 rounded ${buttonStyles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export const PrimaryButton = createButton('primary');