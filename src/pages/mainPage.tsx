import * as classNames from "classnames";
import styles from './mainPage.module.scss'
import {ProductCard} from "../components/ProductCard";
import {PageHeader} from "../components/PageHeader";
import {PageFooter} from "../components/PageFooter";
import {Cart} from "../components/Cart";
import {MealSelector} from "../components/MealSelector";

export const MainPage =()=>{
    return(
        <>
            <PageHeader/>
            <MealSelector/>
            <main className={classNames(styles.mainContainer,styles.mainContent)}>
                <Cart/>
                <section>
                    <span>Бургеры</span>
                    <div className={classNames(styles.mealGrid)}>
                        {[1,2,3,4].map(()=><ProductCard productName={'Хот-дог'} price={"235"} productImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg'} productWeight={555} onAddCLickCallback={()=>{}}/>)}
                    </div>
                </section>
            </main>
            <PageFooter/>
        </>
    )
}