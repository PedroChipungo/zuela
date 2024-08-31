import React, { useState } from "react";
import './HeaderCss/Header.css'
import { NavLink } from "react-router-dom";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import StoriesViewer from "../StoriesViewer/StoriesViewer";

export const NavbarLinks = [
  {
    name: "Zuela",
    link: "/",
    img: "home"
  },
  // {
  //   name: "Inicio",
  //   link: "/stories",
  //   img: "book"
  // },
  // {
  //   name: "Linguas",
  //   link: "#",
  //   img: "people",
  //   icon: "arrow-dropdown-circle",
  //   options: [
  //     {
  //       name: "Bangalo",
  //       link: "/bangalo"
  //     },
  //     {
  //       name: "Kimbundu",
  //       link: "/kimbundu"
  //     },
  //     {
  //       name: "Umbundu",
  //       link: "/umbundu"
  //     },
  //     {
  //       name: "Tchokwe",
  //       link: "/tchokwe"
  //     },
  //     {
  //       name: "Kikongo",
  //       link: "/kikongo"
  //     }
  //   ]
  // },
  // {
  //   name: "Favoritos",
  //   link: "/favorites",
  //   img: "bookmark"
  // },
  // {
  //   name: "Comecar",
  //   link: "/start",
  //   img: "person-add"
  // }
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(false)
  // const [toggleLanguage, setToggleLanguage] = useState(false)

  function handleScroll(event) {
    if (window.scrollY > 0) {
      setShowBorder(true);
    } else {
      setShowBorder(false);
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  return (
    <nav className={`sticky top-0 w-full h-16 flex justify-center flex-row md:flex-col 
    md:px-32 p-0  ${showBorder === true ? 'border-b border-gray-900' : ''} `}>
        <ResponsiveHeader showMenu={showMenu} />
      <div className="w-full md:hidden p-8 flex flex-row items-center justify-between text-white 
        text-2xl">
        <h1 className="font-bold">Zuela</h1>
        <p className="text-5xl"><ion-icon name="menu"></ion-icon></p>
      </div>
        <ul className="hidden md:flex flex-row items-center justify-between text-white 
        text-2xl ">
          
          {NavbarLinks.map(({ name, link, icon}) => (
            <li
              key={name}
              className="font-bold cursor-pointer transition-all duration-700"
            >
                <NavLink to={link} className="active">{name}</NavLink>
            </li>
          ))}
          <NavLink to={'/start'}><button className="button transition-all duration-500">Comecar</button></NavLink>
        
        </ul>
    </nav>
  );
};

export default Header;
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
// import StoriesViewer from "../StoriesViewer/StoriesViewer";

// export const NavbarLinks = [
//   {
//     name: "Zuela",
//     link: "/home",
//     img: "home"
//   },
//   // {
//   //   name: "Inicio",
//   //   link: "/stories",
//   //   img: "book"
//   // },
//   // {
//   //   name: "Linguas",
//   //   link: "#",
//   //   img: "people",
//   //   icon: "arrow-dropdown-circle",
//   //   options: [
//   //     {
//   //       name: "Bangalo",
//   //       link: "/bangalo"
//   //     },
//   //     {
//   //       name: "Kimbundu",
//   //       link: "/kimbundu"
//   //     },
//   //     {
//   //       name: "Umbundu",
//   //       link: "/umbundu"
//   //     },
//   //     {
//   //       name: "Tchokwe",
//   //       link: "/tchokwe"
//   //     },
//   //     {
//   //       name: "Kikongo",
//   //       link: "/kikongo"
//   //     }
//   //   ]
//   // },
//   {
//     name: "Favoritos",
//     link: "/favorites",
//     img: "bookmark"
//   },
//   {
//     name: "Comecar",
//     link: "/start",
//     img: "person-add"
//   }
// ];

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showLanguages, setShowLanguages] = useState(false);
//   const [addressToLanguagePage, setAddressToLanguagePage] = useState(false)
//   // const [toggleLanguage, setToggleLanguage] = useState(false)

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const willShowLanguages = () => {
//     setShowLanguages(!showLanguages);
//   };

//   const willAddressToLanguagePage = () => {
//     setAddressToLanguagePage(!addressToLanguagePage)
//   }
//   return (
//     <div className="relative mb-20 md:mb-0">
//       <div className="absolute w-full p-4">
//         <div className="flex justify-between md:hidden text-5xl p-4">
//             <h1><NavLink to="/stories" className="active">TETEKESSA</NavLink></h1>
//             <p className=""><ion-icon onClick={toggleMenu} name="menu"></ion-icon></p> 
//         </div>

//       </div>
//     <div className="flex flex-row md:flex-col">
//       <div>
//         <ResponsiveHeader showMenu={showMenu} />

//         <ul className="relative hidden md:flex flex-row items-center gap-5 justify-around text-white 
//         text-2xl font-bold border-b-black bg-blue-500">
          
//           {NavbarLinks.map(({ name, link, icon, options }) => (
//             <li
//               key={name}
//               className="cursor-pointer transition-all duration-700 hover:bg-blue-400 md:p-2 lg:text-3xl lg:p-4"
//               onClick={name === 'Linguas' ? willShowLanguages : null}
//             >
//               <ion-icon name={icon}></ion-icon>
//                 <NavLink to={name === "Lingua" ? '#' : link} className="active">{name}</NavLink>
              
//               {name === "Linguas" && showLanguages && (
//                 <ul className="absolute mt-2 bg-yellow-300 border rounded shadow-lg">
//                   {options.map(({ name, link }) => (
//                     <li
//                       key={link}
//                       className="p-2 hover:bg-gray-200"
//                       onClick={willAddressToLanguagePage}
//                     >
//                     <NavLink to={link} className="active">{name}</NavLink>
//                       {/* <NavLink to={link} className="active">{name}</NavLink> */}
//                       {/* <StoriesViewer name={name} addressToLanguagePage={addressToLanguagePage}/> */}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Header;
