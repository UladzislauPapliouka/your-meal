import bg from '../assets/icons/background.svg'
import logo from '../assets/icons/logo.svg'
import bigBurger from '../assets/icons/bigBurger.svg'
import * as classNames from "classnames";
import styles from './mainPage.module.scss'
export const MainPage =()=>{
    return(
        <>
            <header className={classNames(styles.header)}>
                <img className={classNames(styles.headerBg)} alt={'header-bg'} src={bg}/>
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
            </header>
            <main></main>
            <footer></footer>
        </>
    )
}