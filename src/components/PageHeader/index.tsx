import * as classNames from "classnames";
import styles from "./index.module.scss";
import bg from "../../assets/icons/background.svg";
import logo from "../../assets/icons/logo.svg";
import bigBurger from "../../assets/icons/bigBurger.svg";

export const PageHeader = () =>{
    return(
        <header className={classNames(styles.header)}>
            <img className={classNames(styles.headerBg)} alt={'header-bg'} src={bg}/>
            <div className={classNames(styles.content)}>
                <img className={classNames(styles.logo)} alt={'logo'} src={logo}/>
                <div className={classNames(styles.headerContent)}>
                    <img className={classNames(styles.logoBurger)} alt={'logo-burger'} src={bigBurger}/>
                    <div>
                        <div className={classNames(styles.tagline)}>
                            <span>Только самые</span><span>сочные бургеры!</span><span></span>
                        </div>
                        <span className={classNames(styles.delivery)}>Бесплатная доставка от 599₽</span>
                    </div>
                </div>
            </div>
        </header>
    )
}