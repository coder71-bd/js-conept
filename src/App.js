import Checkout from './components/Checkout/Checkout';
import Concepts from './components/Concept/Concept';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="flex justify-evenly mt-10">
        <div className="flex flex-wrap justify-evenly">
          <Concepts />
          <Concepts />
          <Concepts />
          <Concepts />
          <Concepts />
        </div>
        <Checkout />
      </main>
    </div>
  );
}

export default App;
