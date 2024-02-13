import * as classNames from "classnames";
import styles from "./index.module.scss";

export const Cart = ()=>{
    return (
        <section>
            <div className={classNames(styles.cartContainer)}>
                <div className={classNames(styles.cartHeader)}>
                    <span>Корзина</span>
                    <span className={classNames(styles.cartCounter)}>
                                0
                            </span>
                </div>
                <div className={classNames(styles.cartContent)}>
                    <span>Тут пока пусто :(</span>
                </div>
            </div>
        </section>
    )
}