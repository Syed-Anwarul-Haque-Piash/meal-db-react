import React from 'react';

const FoodCart = (props) => {
    const food=props.food;
    //console.log(food)
    return (
        <div>
            <h4>Name: {food.strMeal}</h4>
            <p>Category: {food.strCategory}</p>
        </div>
    );
};

export default FoodCart;