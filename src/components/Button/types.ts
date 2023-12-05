import {ButtonHTMLAttributes} from "react";

type ButtonColorVariant = 'main' | 'secondary'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:ButtonColorVariant,
    fullWidth?:boolean
}