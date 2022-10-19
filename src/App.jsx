import React, {useEffect} from 'react'
import './App.css'
import ReactGA from 'react-ga'
import Apple from './assets/apple-badge.png'
import Google from './assets/google-play-badge.png'


function App() {

  useEffect(() => {

    ReactGA.initialize("UA-241149026-2");

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
    <div className='wrapper'>
      <div>
        <img src='https://homeandawayfoods.com/Frontend/assets/img/logo/logo2.2.png' alt='home and away restaurant logo' />
      </div>
     <div className='card'>
        <a href='https://play.google.com/store/apps/details?id=dev.mrbe.haar'> 
          <img src={Google} alt='Google Playstore badge' /> 
        </a>

        <a href='https://apps.apple.com/ng/app/home-and-away-foods/id1633910516'> 
          <img src={Apple} alt='Apple Store badge' /> 
        </a>
      </div>
      </div>
    </>
  )
}

export default App
