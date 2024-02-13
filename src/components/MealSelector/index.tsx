import * as classNames from "classnames";
import mainStyles from "../../pages/mainPage.module.scss";
import selectorStyles from "./index.module.scss";
import {Chip} from "../Chip";
import burger from "../../assets/icons/burger.svg";
import snacks from "../../assets/icons/snacks.svg";
import hotDogs from "../../assets/icons/hot-dog.svg";
import kombo from "../../assets/icons/kombo.svg";
import kebab from "../../assets/icons/kebab.svg";
import pizza from "../../assets/icons/pizza.svg";
import wok from "../../assets/icons/wok.svg";
import dessert from "../../assets/icons/dessert.svg";
import souce from "../../assets/icons/souce.svg";

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

export const MealSelector  = ()=>{
    return(
        <section className={classNames(mainStyles.mainContainer,selectorStyles.mealSelector)}>
            {mealSelectorOptions.map(({name,icon})=><Chip icon={<img src={icon} alt={name}/>}>{name}</Chip>)}
        </section>
    )
}