import React, { useState, useEffect } from 'react';
import FeedingForm from './components/FeedingForm';
import FeedingList from './components/FeedingList';
import FeedingSummary from './components/FeedingSummary';

const App = () => {
  const [feedings, setFeedings] = useState([]);

  // Load feedings from LocalStorage
  useEffect(() => {
    const savedFeedings = JSON.parse(localStorage.getItem('feedings')) || [];
    setFeedings(savedFeedings);
  }, []);

  // Save feedings to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('feedings', JSON.stringify(feedings));
  }, [feedings]);

  const addFeeding = (feeding) => {
    setFeedings([...feedings, feeding]);
  };

  return (
    <div>
      <h1>Baby Feeding Tracker</h1>
      <FeedingForm onAddFeeding={addFeeding} />
      <FeedingList feedings={feedings} />
      <FeedingSummary feedings={feedings} />
    </div>
  );
};

export default App;
