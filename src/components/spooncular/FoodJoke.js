import React, { useState, useEffect } from 'react';

const FoodJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchFoodJoke();
  }, []);

  const fetchFoodJoke = async () => {
    const response = await fetch('https://api.spoonacular.com/food/jokes/random?apiKey=97f50a0a57b94c16a7d4cb8bb7ca8069');
    const data = await response.json();
    setJoke(data.text);
  };

  return (
    <div>
      <h3>Random Food Joke:</h3>
      <p>{joke}</p>
    </div>
  );
};

export default FoodJoke;