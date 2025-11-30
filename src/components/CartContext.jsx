import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Calcul automatique du total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Afficher une notification
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        showNotification(`Quantité de ${product.name} mise à jour!`, 'info');
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        showNotification(`${product.name} ajouté au panier!`, 'success');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    const product = cart.find(item => item.id === productId);
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification(`${product?.name || 'Produit'} supprimé du panier`, 'danger');
  };

  // Modifier la quantité d'un produit
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    showNotification('Quantité mise à jour', 'info');
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]);
    showNotification('Panier vidé', 'info');
  };

  // Nombre total d'articles
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total: calculateTotal(),
    cartCount: getCartCount(),
    notification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};