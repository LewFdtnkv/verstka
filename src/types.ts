import { MouseEventHandler, ReactNode } from 'react'
 export enum type{
    Primary = "primary",
    Secondary = "secondary",
}
export interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLDivElement>;
    variant: type;
}