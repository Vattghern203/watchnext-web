import { ReactNode } from "react"
import Image from "next/image"

interface ChipProps {

    children?: ReactNode | string
}
function Chip({ children }:ChipProps) {

    return (

        <span className="w-fit h-[2.4em] rounded-full px-2.5 py-0.5 bg-emerald-500 inline-flex justify-between items-center gap-4 text-xs font-semibold"
                tabIndex={0}>
            {children}
        </span>
    )
}

interface ChipImageProps {

    imgSrc: string,
    altText: string,
    size?: number,
}

function ChipImage(
    {
        imgSrc='/static/inception.jpg', altText, size
 
    }: ChipImageProps) {

    const imgSize = size || 20

    return (

        <Image
            className="block w-full h-auto aspect-square rounded-full object-cover object-center"
            src={imgSrc}
            width={imgSize}
            height={imgSize}
            alt={altText}
            loading="lazy"
            fetchPriority="low"
        />
    )
}

export { Chip, ChipImage }