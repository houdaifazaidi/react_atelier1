import React from 'react';
import Bonjour from './components/Bonjour';
import Salut from './components/Salut';
import ListeFruits from './components/ListeFruits';
import Message from './components/Message';

function App() {
  // variable interne : change-la pour tester le message conditionnel
  const userName = 'Houdaifa';
  const isLoggedIn = false; // true / false pour voir la différence

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 20, fontFamily: 'system-ui, sans-serif' }}>
      <Bonjour nom={userName} />
      <Salut />
      <ListeFruits />
      <Message isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
