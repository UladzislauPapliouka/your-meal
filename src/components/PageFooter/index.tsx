import * as classNames from "classnames";
import styles from "./index.module.scss";
import call from '../../assets/icons/call.svg'
import  telegram from '../../assets/icons/telegram.svg'
import  vk from '../../assets/icons/vk.svg'
import tempLogo from "../../assets/icons/tempSecondLogo.svg";

const socials = [
    telegram,
    vk
]
export const PageFooter = () =>{
    return(
        <footer className={classNames(styles.footer)}>
            <div className={classNames(styles.mainContainer)}>
                <div className={classNames(styles.firstBlock)}>
                    <img src={tempLogo} alt={'logo'}/>
                    <div>
                        <span>© YouMeal, 2023</span>
                        <span>Develop: Uladzislau Papliouka</span>
                    </div>
                </div>
                <div/>
                <div>
                    <span>Номер для заказа</span>
                    <div className={classNames(styles.phone)}>
                        <img src={call} alt={'call'}/>
                        <span>+7(930)833-38-11</span>
                    </div>
                </div>
                <div>
                    <span>Мы в соцсетях</span>
                    <div className={classNames(styles.socials)}>
                        {socials.map(s=><img src={s} alt={'soc'}/>)}
                    </div>
                </div>
            </div>
        </footer>
    )
}