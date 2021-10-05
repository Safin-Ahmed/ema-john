import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceOrder = () => {
       
        setCart([]);
        clearTheCart();
        history.push('/placeorder');
    }
    return (
        <div className = "shop-container">
            <div className = "product-container">
                {
                    cart.map(product => <ReviewItem
                        key = {product.key}
                        handleRemove = {handleRemove} 
                        product = {product}>    
                        </ReviewItem>)
                }
            </div>
            <div className = "cart-container">
            <Cart cart = {cart}>
                <button onClick = {handlePlaceOrder} className= "btn-regular">Place Order</button>
            </Cart>
            </div>
        </div>
    );
};

export default OrderReview;