import { WorldMap } from './components/world-map';
import { NavFooter } from './components/nav-footer';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <NavFooter />
      </header>

      <WorldMap />
    </div>
  );
};

export default App;
