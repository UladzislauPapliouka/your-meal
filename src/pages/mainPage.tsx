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
                <div>
                    <img className={classNames(styles.logoBurger)} alt={'logo-burger'} src={bigBurger}/>
                    <span></span><span></span><span></span>
                </div>
            </header>
            <main></main>
            <footer></footer>
        </>
    )
}