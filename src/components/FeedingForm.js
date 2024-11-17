import React, { useState } from 'react';

const FeedingForm = ({ onAddFeeding }) => {
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && amount) {
      onAddFeeding({ time, amount: parseFloat(amount) });
      setTime('');
      setAmount('');
    } else {
      alert('Please fill in both time and amount.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Feeding</h2>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Feeding Time"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (ml)"
      />
      <button type="submit">Add Feeding</button>
    </form>
  );
};

export default FeedingForm;
