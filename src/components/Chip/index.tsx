import {ChipProps} from "./types.ts";
import {FC} from "react";
import style from './chip.module.scss'
import * as classNames from "classnames";
export const Chip: FC<ChipProps>= ({icon,onClick,children,active})=>{
    return <div onClick={onClick} className={classNames({
        [style.chip]:true,
        [style.active]:active
    })}>{
        Boolean(icon) && icon
    }{children}</div>
}