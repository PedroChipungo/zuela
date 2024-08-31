import React from 'react'
import './FooterCss/Footer.css'

const Author = [
  {
    fullName: 'Pedro Domingos Chipungo',
    email: 'pedropedrochipungo@gmail.com',
    contact: '926977557',
    gitHub: 'Pedro Chipungo',
    gitHubLink: '#',
    facebook: 'Sankara Chipungo',
    facebookLink: '#',
  }
]
const Footer = () => {
  return (
    <div className='footerBody footerTextColor lg:py-16 p-8 lg:px-28'>
      <div className='lg:grid grid-cols-2'>
        <div className='w-1/2 flex flex-col'>
          <div>
            <h2 className='text-white text-2xl font-bold'>Zuela</h2>
            <p>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure</p>
          </div>
          <div className='mt-8'>
          <p>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure</p>
          </div>
        </div>
        <div className=' w-full flex flex-col '>
        <h2 className='text-white text-2xl font-bold md:mt-10 p-0'>Author</h2>
          <ul>
            {
              Author.map((author, idx) => (
                <li key={idx}>
                  <p>Name: {author.fullName}</p>
                  <p className='my-2'> <span><ion-icon name='mail'></ion-icon></span> Email: {author.email}</p>
                  <p><span><ion-icon name='logo-whatsApp'></ion-icon></span> WhatsApp: {author.contact}</p>
                  <p className='my-2'><span><ion-icon name='call'></ion-icon></span> Telegram: {author.contact}</p>
                  <p><span><ion-icon name='logo-github'></ion-icon></span> GitHub: {author.gitHub} <span>{author.gitHubLink}</span></p>
                  <p className='my-2'><span><ion-icon name='logo-facebook'></ion-icon></span> Facebook: {author.facebook} <span>{author.facebookLink}</span></p>
                 
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p className='mb-4'>Note: We value your privacy. Here is our privacy policy. If you have any further questions, please send us an email.</p>
        <p >CopyRight 2024, Zuela.com</p>
      </div>
    </div>
  )
}

export default Footer
