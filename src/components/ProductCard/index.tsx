import {FC} from "react";
import {ProductCardProps} from "./types.ts";
import * as classNames from "classnames";
import style from "./productCard.module.scss"
import {Button} from "../Button";
export const ProductCard:FC<ProductCardProps> =({productImage, productName, productWeight, price, onAddCLickCallback})=>{
return <div className={classNames(style.card)}>
    <img src={productImage} alt={`product-image-${productName}`} className={classNames(style.image)}/>
    <b>{price}</b>
    <span>{productName}</span>
    <span>{productWeight}</span>
    <Button variant={'secondary'} onClick={onAddCLickCallback} fullWidth>Добавить</Button>
</div>
}