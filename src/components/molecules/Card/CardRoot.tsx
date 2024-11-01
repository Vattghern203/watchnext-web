import { HTMLAttributes, ReactNode } from "react";


interface CardRootProps extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;
    
}

function CardRoot( { children, ...rest }:CardRootProps ) {

    return (
        <article className="rounded-lg max-w-64 min-w-fit h-auto flex flex-col items-center justify-between gap-6 py-8 px-4 border overflow-hidden" {...rest}>
            {children}
        </article>
    )
}

export default CardRoot;