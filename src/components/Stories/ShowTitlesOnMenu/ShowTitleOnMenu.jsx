import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../../Favorites/FavoritesContents/FavoritesContext'; // Importar o contexto

async function getStories() {
  const response = await fetch('http://localhost:5173/api/someStories/someStories.json');
  const data = await response.json();
  return data;
}

const ShowTitleOnMenu = () => {
  const { pageName } = useParams(); 
  const [loadedStories, setLoadedStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);
  const [showStory, setShowStory] = useState();
  const { addToFavorites } = useFavorites(); // Utilizar o contexto

  useEffect(() => {
    getStories().then((data) => {
      setLoadedStories(data['stories']);
      const story = data['stories'].find(story => story.link === pageName);
      setCurrentStory(story);
    });
  }, [pageName]);

  const storyTitleClicked = (title, content) => {
    setShowStory({ title, content });
  };


  const bookText = (title, content) => {
    addToFavorites({ title, content }); // Adiciona o texto aos favoritos
  };

  return (
    <div className={`bg-slate-200 px-8 py-4 text-green-950`}>
      {currentStory ? (
        <div>
          <ul>
            {currentStory.content.map(({ title, content }, idx) => (
              <li key={idx} className=' mb-4 py-4 px-8 rounded-full duration-1000 bg-white hover:bg-slate-200'>
                <div className='text-3xl mb-2 rounded-full duration-1000 items-center flex flex-row justify-between'>
                  <h2 className='cursor-pointer '>
                    <span>{idx + 1}.   </span>
                    <span onClick={() => storyTitleClicked(title, content)} className='transition-all duration-700 rounded-full p-2 hover:bg-slate-400'>{title}</span>
                  </h2>
                  <span onClick={() => bookText(title, content)} className='cursor-pointer rounded-full p-2  transition-all duration-700 text-4xl hover:bg-slate-400'>
                    <ion-icon name='bookmark'></ion-icon>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default ShowTitleOnMenu;
