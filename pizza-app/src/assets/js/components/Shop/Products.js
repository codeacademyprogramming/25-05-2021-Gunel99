import React from 'react';
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";

const productSelector = state => {
    return state.products
}

export default function Products() {

    const products = useSelector(productSelector);

    return (
        <div>
            <AddProduct />

            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}
