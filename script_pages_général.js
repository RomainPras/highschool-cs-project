//EXPERIMENTAL - ANIMATION BOUTON
// On sélectionne le bouton
const menuUtilisateur = document.querySelector('.user-menu');

menuUtilisateur.addEventListener('click', () => {
  // Définition d'images clés combinant tremblement et couleur
  // L'animation active se déroule de 0% à 75% du temps (0.6s / 0.8s)
  const groupeImagesClés = [
    { transform: 'translateX(0)', borderColor: 'initial', offset: 0 },
    { transform: 'translateX(-5px)', borderColor: 'red', offset: 0.15 },
    { transform: 'translateX(5px)', borderColor: 'red', offset: 0.30 },
    { transform: 'translateX(-5px)', borderColor: 'red', offset: 0.45 },
    { transform: 'translateX(5px)', borderColor: 'red', offset: 0.60 },
    { transform: 'translateX(0)', borderColor: 'initial', offset: 0.75 },
    // Pause de 0.2s (75% à 100%)
    { transform: 'translateX(0)', borderColor: 'initial', offset: 1 }
  ];

  // Config timing
  const planCombiné = {
    duration: 800, // pour pause incluse
    iterations: 1,
    easing: 'ease-in-out'
  };

  // lancement de l'animation
  menuUtilisateur.animate(groupeImagesClés, planCombiné);
});
