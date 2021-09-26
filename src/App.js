import { useEffect, useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import Concept from './components/Concept/Concept';
import Header from './components/Header/Header';

function App() {
  const [concepts, setConcepts] = useState([]);
  const [unlocked, setUnlocked] = useState([]);
  useEffect(() => {
    fetch('./concepts.JSON')
      .then((res) => res.json())
      .then((data) => setConcepts(data));
  });

  // handle adding unlocked concept in cart
  const handleUnlocked = (concept) => {
    const newUnlockedArr = [...unlocked, concept];
    setUnlocked(newUnlockedArr);
  };

  return (
    <div>
      <Header />

      <main className="flex justify-evenly mt-10">
        <div className="flex flex-wrap justify-evenly">
          {concepts.map((concept) => (
            <Concept
              key={concept.id}
              concept={concept}
              handleUnlocked={handleUnlocked}
            />
          ))}
        </div>

        {/* checkout cart */}
        <Checkout unlocked={unlocked} />
      </main>
    </div>
  );
}

export default App;
