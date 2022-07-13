import { Globe } from 'worldwind-react';

import { Navbar } from '@components/navbar';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <header className="app-header">Map</header>
      <Globe />
    </div>
  );
}
