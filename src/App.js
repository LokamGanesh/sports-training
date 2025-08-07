import React, { useState } from 'react';
import SportsGrid from './components/SportsGrid';

function App() {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleSportSelect = (sportName) => {
    setSelectedSport(sportName);
    alert(`Selected: ${sportName} — Location access & coach search coming next!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold p-4">Choose a Sport to Learn</h1>
      {!selectedSport ? (
        <SportsGrid onSelect={handleSportSelect} />
      ) : (
        <p className="text-xl mt-10">You selected: {selectedSport}</p>
      )}
    </div>
  );
}

export default App;