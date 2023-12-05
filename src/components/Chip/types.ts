import {PropsWithChildren, ReactElement} from "react";

export interface ChipProps extends PropsWithChildren{
    icon?: ReactElement;
    active?:boolean;
    onClick?:()=>void
}