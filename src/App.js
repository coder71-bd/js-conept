import { useEffect, useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import Concept from './components/Concept/Concept';
import Header from './components/Header/Header';

function App() {
  const [concepts, setConcepts] = useState([]);
  useEffect(() => {
    fetch('./concepts.JSON')
      .then((res) => res.json())
      .then((data) => setConcepts(data));
  });
  return (
    <div>
      <Header />
      <main className="flex justify-evenly mt-10">
        <div className="flex flex-wrap justify-evenly">
          {concepts.map((concept) => (
            <Concept key={concept.id} concept={concept} />
          ))}
        </div>
        <Checkout />
      </main>
    </div>
  );
}

export default App;
