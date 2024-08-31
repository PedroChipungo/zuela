import React from "react";
import { NavLink } from "react-router-dom";
import './TutorialCss/Tutorial.css'
const Tutorial = () => {
  return (
    <div className="flex items-center flex-col place-items-center justify-center h-full text-blue-900 text-2xl">
      <h1 className="font-bold">Bem vindo ao Zuela</h1>
      <img
        className="image"
        src="https://media.istockphoto.com/id/1069256988/vector/young-smiling-girls-scout-dressed-in-uniform-with-badges-and-patches-happily-jump-isolated.jpg?s=612x612&w=0&k=20&c=HbJQFfkv8vi6Uf5cVPRrV9il8YaapCbUUBGuwcZ-0_8="
        alt=""
      />
      <p className="text-sm">
        Aprenda a como usar Zuela para melhorar a sua pronuncia em Linguas
        Nacionais
      </p>
      <button className="tutorialButton px-20 py-2 rounded-md transition-all duration-200 text-xl text-white mt-28">
        <NavLink to={"/tutorialIntro"}>Cemecar</NavLink>
      </button>
     
    </div>
  );
};

export default Tutorial;
