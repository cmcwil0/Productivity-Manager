import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

import '../css/Home.css'
import Navline from '../assets/Navline.svg?react'


const Home = () => {
  useGSAP(() => {
    gsap.from('.cls-1', { duration: 1.5, drawSVG: 0, ease: 'none' });
  });

  return (
    <div className="home">
      <div className='svg-container'>
        <Navline />
      </div>
    </div>
  )
}

export default Home
