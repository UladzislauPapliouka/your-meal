import styles from './button.module.scss'
import {FC} from "react";
import {ButtonProps} from "./types.ts";
import * as classNames from "classnames";

export const Button: FC<ButtonProps> = ({variant='main', fullWidth, ...props}) => {
    return <button className={classNames(
        {
            [styles.button]:true,
            [ styles[variant]]:true,
            [styles.fullWidth]:fullWidth
        }
    )} {...props} />;
}