import React, { useState, useEffect } from 'react';

const FoodTrivia = () => {
  const [trivia, setTrivia] = useState('');

  useEffect(() => {
    fetchFoodTrivia();
  }, []);

  const fetchFoodTrivia = async () => {
    const response = await fetch('https://api.spoonacular.com/food/trivia/random?apiKey=97f50a0a57b94c16a7d4cb8bb7ca8069');
    const data = await response.json();
    setTrivia(data.text);
  };

  return (
    <div>
      <h3>Random Food Trivia:</h3>
      <p>{trivia}</p>
    </div>
  );
};

export default FoodTrivia;