import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals,setMeals]=useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(response => response.json())
        .then(data=>{
            //console.log(data.meals)
            setMeals(data.meals)
        })
    },[])
    const handleMeal=(meal,idMeal)=>{
        //console.log("meal added",meal);
        const addMeal=cart.find(pd=>pd.idMeal===meal.idMeal)
        if(!addMeal){
            setCart([...cart,meal])
        }
        else{
            alert("Already added")
        }
       
       }
    return (
        <div className='meals'>
           <div className='meal-container'>
              {meals.map(meal=><Meal meal={meal} handleMeal={handleMeal} key={meal.idMeal}></Meal>)}
           </div>
           <div className='cart-container'>
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Meals;