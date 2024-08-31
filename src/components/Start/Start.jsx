import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import "./StartCss/Start.css";
import Tutorial from "../SideBarOptions/Tutorial/Tutorial";

const wellComeContent = [
  {
    title: "Aulas",
    link: '/lessons',
    content: [
      {
        name: "Alfabeto Fonetico",
        link: "/phoneticLessons",
      },
      {
        name: "Pronuncia",
        link: "/speakingSkill",
      },
      {
        name: "Audicao",
        link: "/listeningSkill",
      },
    ],
  },
  {
    title: "Ferramentas",
    link: '/tools',
    content: [
      {
        name:'Audios',
        link:'/audios'
      },
      {
        name:'Livros',
        link:'/books'
      },
      {
        name:'Letras de Musicas',
        link:'/lyrics'
      },
      {
        name:'Posts',
        link:'/posts'
      },
      {
        name:'Historia e Cultura',
        link:'/history&Culture'
      },

    ]
  },

  {
    title: "Exercicios",
    link: '/exercises',
    content: [
      {
        name:'Palavras acentuadas',
        link:'/stressedWords'
      },
      {
        name:'Ache a palavra',
        link:'/findWord'
      },
      {
        name:'Teste de percepcao pessoal',
        link:'/selfPerceptionTest'
      },
     
      
    ]
  },
  {
    title: "Mais",
    link: '/more',
    content: [
      {
        name:'Como usar o Zuela',
        link:'tutorial'
      },
      {
        name:'Criar conta',
        link:'/signUp'
      },
      {
        name:'Pagina inicial',
        link:'/'
      },
      {
        name:'Blog',
        link:'/blog'
      },
     
    ]
  }
];
const Start = () => {
  return (
    <div>
      <h1 className="sticky top-0 bg-white p-2 w-full font-bold text-2xl text-center border border-gray-200 text-gray-500 cursor-default">
        <NavLink to="/">Zuela</NavLink>
      </h1>
      <div className="text-sm text-gray-500">
        <h2 className="text-center lg:pt-4 pb-2 lg:px-4 p-1 border border-b-gray-300">
          Pronuncia em Bangala
        </h2>
        <ul>
          {wellComeContent.map(({ title, content }, index) => (
            <li key={index} className="">
              <h2 className="text-gray-950 py-2 text-center lg:text-start px-4 ">{title}</h2>
              <ul>
                {content.map(({ name, link }, subIndex) => (
                  <li key={subIndex} className="flex items-center transition-all duration-300 cursor-pointer hover:bg-gray-200 text-gray-800 mb-2">
                    <span className="font-bold text-gray-400 px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                      </svg>
                    </span>
                    <p className="px-2 border-b border-gray-300 w-full">
                    <NavLink to={link} className="">
                      {name}
                    </NavLink>
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className=" right-container"> */}
        {/* wellComeContent */}
        {/* <Outlet/>
        <div className="flex flex-col place-items-center justify-center h-full text-blue-900 text-2xl">
              <h1 className="font-bold">Bem vindo ao Zuela</h1>
         <img className="image" src="https://media.istockphoto.com/id/1069256988/vector/young-smiling-girls-scout-dressed-in-uniform-with-badges-and-patches-happily-jump-isolated.jpg?s=612x612&w=0&k=20&c=HbJQFfkv8vi6Uf5cVPRrV9il8YaapCbUUBGuwcZ-0_8=" alt="" />
        <p className="text-sm">Aprenda a como usar Zuela para melhorar a sua pronuncia em Linguas Nacionais</p>
        <button className="wellComeButton px-20 py-2 rounded-md transition-all duration-200 text-xl text-white mt-28">
           <NavLink to={'/tutorial'}>Cemecar</NavLink>
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Start;
