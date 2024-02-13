import * as classNames from "classnames";
import styles from "./index.module.scss";

export const PageFooter = () =>{
    return(
        <footer className={classNames(styles.footer)}>
            <div className={classNames(styles.mainContainer)}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </footer>
    )
}