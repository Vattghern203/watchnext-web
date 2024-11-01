import { HTMLAttributes, ReactNode } from "react"

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {

    children?: ReactNode | string
}

function CardContent( { children, ...rest }:CardContentProps ) {

    return (
        <div className="w-full self-stretch" {...rest}>
            {children}
        </div>
    )
}

export default CardContent