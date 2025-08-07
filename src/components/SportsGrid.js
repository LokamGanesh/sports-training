import React from 'react';
import sports from '../data/sports';

const SportsGrid = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onSelect(sport.name)}
          className="p-6 bg-white rounded-xl shadow hover:scale-105 transition text-center"
        >
          <div className="text-4xl">{sport.image}</div>
          <p className="mt-2 font-bold">{sport.name}</p>
        </button>
      ))}
    </div>
  );
};

export default SportsGrid;