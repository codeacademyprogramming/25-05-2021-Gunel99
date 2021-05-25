import React from 'react';
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";

export default function Products() {

    const products = useSelector(state => state.products);

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
