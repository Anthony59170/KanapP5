// Récupérer le button sur le DOM via la const addToCart
const addToCart = document.querySelector('#addToCart');
//Initialiser un tableau vide qui va acceuillir item
const data = [];

//Evénement au click sur le button
addToCart.addEventListener('click', () => {
  // Récupération sur le DOM des éléments "color,quantity + name"
  const color = document.querySelector('#colors').value;
  const quantity = document.querySelector('#quantity').value;
  // Récupérer le titre pour l'assigner en clés de l'objet JSON
  const name = document.querySelector('#title').textContent;

  // squellette de data
  const item = {
    id: idResult,
    color: color,
    quantity: Number(quantity), // Convertir la quantité en number
  };

  /* Fonction pour itérer sur data et vérifier que l'id est le même et la couleur, 
ausquels cas incrémenter la quantity */
  function updateData(item, data) {
    for (const dat of data) {
      if (dat.id === item.id && dat.color === item.color) {
        dat.quantity += item.quantity;
        return;
      }
    }
    // Si ce n'est pas le cas Push item dans data
    data.push(item);
  }
  // On joue la fonction
  updateData(item, data);

  // Ont injecte avec une clés name propre à chaque élements, et valeur (data) dans un format JSON.stringify sérialisé
  localStorage.setItem(name, JSON.stringify(data));

  /*-----  Redirection vers la page panier (optionnel)-----
       =>   window.location.href = 'cart.html'; */
});
