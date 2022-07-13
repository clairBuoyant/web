import { Globe } from 'worldwind-react';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <p>clairBuoyant</p>
      </header>
      <Globe canvasId="canvas_123" />
    </div>
  );
};

export default App;
