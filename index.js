document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' FCFA', ''));
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total} FCFA`;
    }
  
    // Fonction pour gérer l'ajout et la réduction de la quantité
    function handleQuantityChange(e) {
      const card = e.target.closest('.card');
      if (!card) return;
  
      const quantitySpan = card.querySelector('.quantity');
      let quantity = parseInt(quantitySpan.textContent);
  
      if (e.target.classList.contains('fa-plus-circle')) {
        quantity++;
      } else if (e.target.classList.contains('fa-minus-circle')) {
        if (quantity > 0) quantity--;
      }
  
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    }
  
    // Fonction pour gérer la suppression des articles
    function handleRemoveItem(e) {
      const card = e.target.closest('.card');
      if (!card) return;
  
      card.remove();
      updateTotalPrice();
    }
  
    // Fonction pour gérer le changement de couleur du cœur
    function handleLikeItem(e) {
      if (e.target.classList.contains('fa-heart')) {
        e.target.classList.toggle('liked');
      }
    }
  
    // Ajout des événements aux boutons
    document.querySelectorAll('.fa-plus-circle, .fa-minus-circle').forEach(button => {
      button.addEventListener('click', handleQuantityChange);
    });
  
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', handleRemoveItem);
    });
  
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', handleLikeItem);
    });
  
    // Initialisation du prix total
    updateTotalPrice();
  });
  