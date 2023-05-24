import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCostumer } from '../featuers/customerSlice';

interface FoodCardTypes {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: FoodCardTypes) => {
  const [foodInput, setFoodInput] = useState('');
  const dispatc = useDispatch();

  const handleAddCustomerFood = () => {
    if (!foodInput) return;
    dispatc(addFoodToCostumer({ id, food: foodInput }));
    setFoodInput('');
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleAddCustomerFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
