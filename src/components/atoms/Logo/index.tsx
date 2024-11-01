import Image from "next/image"

interface LogoProps {

    width: number,
    height: number,
    altText: string,
    className?: string,
    src: string,
}

function Logo( { src, width, height, altText, className }:LogoProps ) {

    return (
        <Image
            className={`rounded-md ${className}`}
            src={src}
            alt={altText}
            width={width}
            height={height}
            loading="eager"
            fetchPriority="high"
        />
    )
}

export default Logo