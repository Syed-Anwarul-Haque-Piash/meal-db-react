import React from 'react';
import FoodCart from '../Foodcart/FoodCart';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    //console.log(cart);
    return (
        <div className='cart'>
          <h1>Number of meal:{cart.length}</h1>
          {cart.map(food=><FoodCart food={food} key={food.idMeal}></FoodCart>)}
        </div>
    );
};

export default Cart;