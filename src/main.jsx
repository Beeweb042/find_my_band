import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonFindMyBand from './components/ButtonFindMyBand/ButtonFindMyBand.jsx'
import YouTubeIcon from './components/BandCard/YouTubeIcon.jsx'
import HeartIcon from './components/BandCard/HeartIcon.jsx'
import BandCard from './components/BandCard/BandCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ButtonFindMyBand/>
    <BandCard/>
  </StrictMode>,
)
