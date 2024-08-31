import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (story) => {
    setFavorites((prevFavorites) => [...prevFavorites, story]);
  };

  const removeFavorite = (title) => {
    setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.title !== title));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
