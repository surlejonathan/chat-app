import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact name='Maureen Ruiz'
        online
        avatar="https://randomuser.me/api/portraits/women/59.jpg"
      />
      <Contact name='Morris Reid'
        avatar="https://randomuser.me/api/portraits/men/21.jpg"
      />
      <Contact name='Sebastian Bishop'
        online
        avatar="https://randomuser.me/api/portraits/men/52.jpg"
      />
    </div>
  );
}

export default App;
