import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
   const {strCategory,strMeal,strMealThumb,strTags}=props.meal;
   const handleMeal=props.handleMeal;
    return (
        <div className='meal'>
            <h4>Category: {strCategory}</h4>
            <h3>{strTags?strTags:"no tags"}</h3>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strMeal}</h2>
            <button onClick={()=>handleMeal(props.meal)} className='button' >
            
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Meal;