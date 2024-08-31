import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuTitles from './showItems/MenuTitles';
import { useGlobalData } from '../GlobalData/GlobalData';
import ShowContents from './ShowTitlesOnMenu/ShowTitleOnMenu';
import contentToShow from './showItems/MenuTitles'


// async function getStories() {
//   const response = await fetch('http://localhost:5173/api/someStories/someStories.json');
//   const data = await response.json();
//   return data;
// }

const Stories = () => {
  const {storiesTitlesMenu, setStoriesTitleMenu} = useGlobalData();
  // console.log(storiesTitlesMenu)
  // const { languageName } = useParams(); // Obtém o nome da língua da URL
  // const [loadedStories, setLoadedStories] = useState([]);
  // const [activeContent, setActiveContent] = useState(null); // Estado para armazenar a língua ativa

  // useEffect(() => {
  //   getStories().then((data) => {
  //     setLoadedStories(data['stories']);
  //   });
  // }, []);
  
  return (
      <div className=' bg-gray-200 p-2 '>
        {/* <ul className='w-full'>

          {storiesTitlesMenu.map(({ language, content,link }, index) => (
              <MenuTitles language={language} content={content} link={link} key={index}/>
          ))}
        </ul> */}
        
      </div>
  );
};

export default Stories;


