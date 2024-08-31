import React from 'react'

const FirstContent = [
  {
    title: "Proncuncia",
    icon: "musical-note",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Adipisci sit omnis, fugit sunt, illum doloribus assumenda odio neque aliquid quos beatae quaerat quae. 
    Optio quod voluptatibus reprehenderit quibusdam beatae! Ipsa!`
  },
  {
    title: "Vocabularios",
    icon: "copy"
    ,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Adipisci sit omnis, fugit sunt, illum doloribus assumenda odio neque aliquid quos beatae quaerat quae. 
    Optio quod voluptatibus reprehenderit quibusdam beatae! Ipsa!`
  },
  {
    title: "Audicao",
    icon: "headset"
    ,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Adipisci sit omnis, fugit sunt, illum doloribus assumenda odio neque aliquid quos beatae quaerat quae. 
    Optio quod voluptatibus reprehenderit quibusdam beatae! Ipsa!`
  },
];
const HomeContents = () => {
  return (
    <div className='p-8 lg:p-16'>
      <h2 className='text-4xl text-blue-900'>O Que e o Zuela</h2>
      <div className='text-blue-950'>
        <p className=' text-2xl md:m-4'>Um lugar onde podes aprender:</p>
          <div >
            <ul className='lg:grid grid-cols-3 lg:text-center md:m-8'>
              {
                FirstContent.map( ({title, icon, description}, idx) => (
                  <li key={idx} className='  md:py-2 p-4'>
                      <h2 className='text-3xl lg:text-5xl'>{title}</h2>
                      <p className='text-4xl'><ion-icon name={icon}></ion-icon></p>
                    <p className='text-xl'>{description}</p>
                  </li>
                )

                )
              }
            </ul>
            
          </div>

      </div>
    </div>
  )
}

export default HomeContents
