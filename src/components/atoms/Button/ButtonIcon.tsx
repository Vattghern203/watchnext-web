import { ElementType } from "react"

interface ButtonIconProps {

    icon: ElementType; // This should be a custom React component or a component from a library like Material-UI or Ant Design
 
}

function ButtonIcon({icon: Icon}: ButtonIconProps) {

    return (

        <Icon />
    )
}

export default ButtonIcon;