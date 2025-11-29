import React from 'react';

export default function ListeFruits() {
  const fruits = [
    { id: 1, nom: 'Pomme' },
    { id: 2, nom: 'Banane' },
    { id: 3, nom: 'Orange' },
    { id: 4, nom: 'Kiwi' }
  ];

  return (
    <>
      <h3>Nos fruits</h3>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.nom}</li>
        ))}
      </ul>
    </>
  );
}
