import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
     let total = 0;
     for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price;
        totalQuantity = totalQuantity + product.quantity;
     }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping)*0.1;
    const totalBeforeShipping = total + shipping;
    const grandTotal = total + shipping + tax;
    return (
        <div>
                <h2>Order Summary</h2>
                <h5>Items Ordered: {totalQuantity}</h5>
                <br/>
                <p>Total: {total.toFixed(2)}</p>
                <p>Shipping: {shipping.toFixed(2)}</p>
                <p>Total Before Tax : {totalBeforeShipping.toFixed(2)}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <p>Grand Total : {grandTotal.toFixed(2)}</p>
                {props.children}

        </div>
    );
};

export default Cart;