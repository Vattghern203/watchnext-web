import { ReactNode } from "react";

interface HeaderRootProps {

    children: ReactNode;
}

function HeaderRoot( { children }:HeaderRootProps ) {

    return (
        <header className="w-full h-fit">
            {children}
        </header>
    )
}

export default HeaderRoot
