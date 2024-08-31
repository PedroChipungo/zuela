import React from 'react';
import { Outlet } from 'react-router-dom';
import './LayOutCss/LayOut.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Start from '../../components/Start/Start'; // Navegação fixa

const LayOut = () => {
  return (
    <div className="">
      <div className="main-container">
        <div className="left-container scrollable-container w-[20%] ">
          <Start /> {/* Navegação fixa */}
        </div>
        <div className="right-container scrollable-container flex items-center justify-center w-full">
          <Outlet /> {/* Conteúdo dinâmico */}
        </div>
      </div>
    </div>
  );
}

export default LayOut;
