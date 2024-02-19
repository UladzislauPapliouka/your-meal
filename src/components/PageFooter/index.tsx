import * as classNames from "classnames";
import styles from "./index.module.scss";
import call from '../../assets/icons/call.svg'
export const PageFooter = () =>{
    return(
        <footer className={classNames(styles.footer)}>
            <div className={classNames(styles.mainContainer)}>
                <div>1</div>
                <div>2</div>
                <div>
                    <span>Номер для заказа</span>
                    <div className={classNames(styles.phone)}>
                        <img src={call} alt={'call'}/>
                        <span>+7(930)833-38-11</span>
                    </div>
                </div>
                <div>4</div>
            </div>
        </footer>
    )
}