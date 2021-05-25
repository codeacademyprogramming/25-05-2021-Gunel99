import React, { useState } from 'react';

export default function AddProduct() {

    const dispatch = useDispatch();
    const [productTitle, setProductTitle] = useState(``);

    const handleProductCreate = e => {
        e.preventDefault();
        
        if(productTitle)  {
            dispatch({
                type: 'PRODUCTS/ADD_PRODUCTS',
                payload: productTitle,
            })
            setProductTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={handleProductCreate}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text"
                        value={productTitle}
                        onChange={e => setProductTitle(e.target.validationMessage)}
                        className="form-control" 
                        id="title" 
                        placeholder="e.g: Margaritta" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}
