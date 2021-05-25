import React from 'react';
import Products from "./Products";

export default function Shop() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <Products />
                    </div>
                    <div className="col-4">
                        Basket
                    </div>
                </div>
            </div>
        </div>
    )
}
