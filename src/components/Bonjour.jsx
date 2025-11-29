import React from 'react';

export default function Bonjour({ nom }) {
  // on affiche ici une variable dans le JSX
  const greeting = `Bienvenue, ${nom} !`;
  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
}
