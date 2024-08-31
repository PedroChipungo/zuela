import React, { useState } from 'react';
import { useFavorites } from './FavoritesContents/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites(); // Adiciona a função de remover favoritos
  const [favoriteContent, setFavoriteContent] = useState(null);

  const toggleContent = (title) => {
    if (favoriteContent && favoriteContent.title === title) {
      // Se o mesmo título foi clicado, fechamos o conteúdo
      setFavoriteContent(null);
    } else {
      // Caso contrário, mostramos o conteúdo correspondente
      const selectedContent = favorites.find(fav => fav.title === title);
      setFavoriteContent(selectedContent);
    }
  };

  return (
    <div className='bg-slate-200 px-8 py-4 text-green-950'>
      <h1 className='text-4xl mb-6'>Favorites</h1>
      <ul>
        {favorites.map(({ title }, idx) => (
          <li key={idx} className='mb-4 bg-white hover:bg-slate-200 duration-700 items-center py-4 px-8 rounded-full'>
            <h2
              onClick={() => toggleContent(title)}
              className='text-3xl mb-2 cursor-pointer hover'
            >
              <div className='flex flex-row justify-between'>
              {title}
              <button 
                  onClick={() => removeFavorite(title)}
                  className='bg-slate-500 text-white py-1 px-3 rounded-full transition-all duration-700 hover:bg-red-400'
                >
                 X
                </button>

              </div>
            </h2>
            {favoriteContent && favoriteContent.title === title && (
              <div>
                <p className='text-xl mb-2'>{favoriteContent.content}</p>
               
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
