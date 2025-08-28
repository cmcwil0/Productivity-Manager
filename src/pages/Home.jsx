import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

import '../css/Home.css'
import Navline from '../assets/Navline.svg?react'
import Navcircle from '../assets/Navcircle.svg?react'

gsap.registerPlugin(DrawSVGPlugin);

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.nav-line', { duration: 1.5, drawSVG: 0, ease: 'none' })
      .from('.nav-circle', { duration: 1.5, drawSVG: '10% 100%', ease: 'none'});
  });

  return (
    <div className="home">
      <div className='svg-container'>
        <Navline className="nav-line"/>
        <Navcircle className="nav-circle"/>
      </div>
    </div>
  )
}

export default Home
