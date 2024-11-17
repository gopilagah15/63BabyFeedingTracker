import React from 'react';

const FeedingList = ({ feedings }) => {
  return (
    <div>
      <h2>Feeding Log</h2>
      {feedings.length === 0 ? (
        <p>No feedings recorded yet.</p>
      ) : (
        <ul>
          {feedings.map((feeding, index) => (
            <li key={index}>
              <strong>Time:</strong> {feeding.time} <br />
              <strong>Amount:</strong> {feeding.amount} ml
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedingList;
