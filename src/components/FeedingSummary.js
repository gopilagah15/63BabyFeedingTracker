import React from 'react';

const FeedingSummary = ({ feedings }) => {
  const totalFeedings = feedings.length;
  const totalAmount = feedings.reduce((acc, feeding) => acc + feeding.amount, 0);
  const averageAmount = totalFeedings > 0 ? (totalAmount / totalFeedings).toFixed(2) : 0;

  return (
    <div>
      <h2>Feeding Summary</h2>
      <p>Total Feedings: {totalFeedings}</p>
      <p>Total Amount Consumed: {totalAmount} ml</p>
      <p>Average Amount per Feeding: {averageAmount} ml</p>
    </div>
  );
};

export default FeedingSummary;
