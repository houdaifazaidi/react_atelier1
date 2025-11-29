import React from 'react';

export default function Message({ isLoggedIn }) {
  // ternaire utilisée ici
  return (
    <>
      <p>
        {isLoggedIn
          ? "Vous êtes connecté. Profitez de nos offres exclusives !"
          : "Vous n'êtes pas connecté. Connectez-vous pour voir plus d'options."}
      </p>
    </>
  );
}
