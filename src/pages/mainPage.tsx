import * as classNames from "classnames";
import styles from './mainPage.module.scss'
import burger from '../assets/icons/burger.svg'
import snacks from '../assets/icons/snacks.svg'
import hotDogs from '../assets/icons/hot-dog.svg'
import kombo from '../assets/icons/kombo.svg'
import kebab from '../assets/icons/kebab.svg'
import pizza from '../assets/icons/pizza.svg'
import wok from '../assets/icons/wok.svg'
import dessert from '../assets/icons/dessert.svg'
import souce from '../assets/icons/souce.svg'
import {Chip} from "../components/Chip";
import {ProductCard} from "../components/ProductCard";
import {PageHeader} from "../components/PageHeader";

const mealSelectorOptions = [
    {name:"Бургеры",icon:burger},
    {name:"Закуски",icon:snacks},
    {name:"Хот-доги",icon:hotDogs},
    {name:"Комбо",icon:kombo},
    {name:"Шаурма",icon:kebab},
    {name:"Пиццы",icon:pizza},
    {name:"Вок",icon:wok},
    {name:"Дессерты",icon:dessert},
    {name:"Соусы",icon:souce},
]
export const MainPage =()=>{
    return(
        <>
            <PageHeader/>
            <section className={classNames(styles.mainContainer,styles.mealSelector)}>
                    {mealSelectorOptions.map(({name,icon})=><Chip icon={<img src={icon} alt={name}/>}>{name}</Chip>)}
            </section>
            <main className={classNames(styles.mainContainer,styles.mainContent)}>
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
                <section>
                    <span>Бургеры</span>
                    <div className={classNames(styles.mealGrid)}>
                        {[1,2,3,4].map(()=><ProductCard productName={'Хот-дог'} price={"235"} productImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg'} productWeight={555} onAddCLickCallback={()=>{}}/>)}
                    </div>
                </section>
            </main>
            <footer className={classNames(styles.footer)}>
                <div className={classNames(styles.mainContainer)}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </footer>
        </>
    )
}